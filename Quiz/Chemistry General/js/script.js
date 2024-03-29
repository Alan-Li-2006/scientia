'use strict';

//getting all required elements
const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .restart');
const quiz_box = document.querySelector('.quiz_box');
const timeCount = quiz_box.querySelector('.timer .timer_sec');
const timeLine = quiz_box.querySelector('header .time_line');
const timeOff = quiz_box.querySelector('header .time_text');

const option_list = document.querySelector('.option_list');

//Start Quiz button clicked
start_btn.addEventListener('click', function () {
  info_box.classList.add('activeInfo');
});

//Exit button
exit_btn.addEventListener('click', function () {
  info_box.classList.remove('activeInfo');
  window.close();
});

//Continue button
continue_btn.addEventListener('click', function () {
  info_box.classList.remove('activeInfo');
  quiz_box.classList.add('activeQuiz');
  showQuestions(0);
  queCounter(1);
  startTimer(14);
  startTimerLine(0);
});

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;
let counterLine;

const next_btn = quiz_box.querySelector('.next_btn');
const result_box = document.querySelector('.result_box');
const restart_quiz = result_box.querySelector('.buttons .restart');
const quit_quiz = result_box.querySelector('.buttons .quit');

//Quit button
quit_quiz.addEventListener('click', function () {
  window.close();
});

//Retry button
restart_quiz.addEventListener('click', function () {
  result_box.classList.remove('activeResult');
  quiz_box.classList.add('activeQuiz');
  que_count = 0;
  que_numb = 1;
  counter;
  timeValue = 15;
  widthValue = 0;
  userScore = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  startTimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(widthValue);
  next_btn.style.display = 'none';
  timeOff.textContent = 'Time Left';
});

//Next button
next_btn.addEventListener('click', function () {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = 'none';
    timeOff.textContent = 'Time Left';
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    console.log('Questions completed');
    showResultBox();
  }
});

//getting questions and options from array
function showQuestions(index) {
  const que_text = document.querySelector('.que_text');
  let que_tag =
    '<span>' + numbers[index] + '. ' + questions[index].question + '</span>';
  let option_tag =
    '<div class="option">' +
    questions[index].options[0] +
    '<span></span></div>' +
    '<div class="option">' +
    questions[index].options[1] +
    '<span></span></div>' +
    '<div class="option">' +
    questions[index].options[2] +
    '<span></span></div>' +
    '<div class="option">' +
    questions[index].options[3] +
    '<span></span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll('.option');
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

let subtopicRecommendations = JSON.parse(
  localStorage.getItem('suggestionValue')
);

if (subtopicRecommendations == null) {
  subtopicRecommendations = {
    bonds: 0,
    atoms: 0,
    periodicTable: 0,
    naturalSelection: 0,
  };
}

if (localStorage.getItem('points') == null) {
  localStorage.setItem('points', 1000);
}

let userDNA = JSON.parse(localStorage.getItem('points'));

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  let id = questions[que_count].numb;

  if (userAns == correctAns) {
    userScore += 1;
    userDNA += 10;
    localStorage.setItem('points', userDNA);
    answer.classList.add('correct');
    console.log('Answer is Correct');
    answer.insertAdjacentHTML('beforeend', tickIcon);

    if (
      subtopicRecommendations.bonds !== 0 &&
      que_count == 19 &&
      userScore / que_count >= 0.9
    ) {
      subtopicRecommendations.bonds -= 1;
      let subRecsSerialised = JSON.stringify(subtopicRecommendations);
      localStorage.setItem('suggestionValue', subRecsSerialised);
      console.log(subtopicRecommendations);
    }

    if (
      subtopicRecommendations.atoms !== 0 &&
      que_count == 19 &&
      userScore / que_count >= 0.9
    ) {
      subtopicRecommendations.atoms -= 1;
      let subRecsSerialised = JSON.stringify(subtopicRecommendations);
      localStorage.setItem('suggestionValue', subRecsSerialised);
      console.log(subtopicRecommendations);
    }
  } else {
    answer.classList.add('incorrect');
    console.log('Incorrect answer ');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    if (id > 0 && id <= 20) {
      subtopicRecommendations.bonds += 1;
      let subRecsSerialised = JSON.stringify(subtopicRecommendations);
      localStorage.setItem('suggestionValue', subRecsSerialised);
      console.log(subtopicRecommendations);
      // console.log(localStorage);
    }

    if (id > 20 && id <= 40) {
      subtopicRecommendations.atoms += 1;
      let subRecsSerialised = JSON.stringify(subtopicRecommendations);
      localStorage.setItem('suggestionValue', subRecsSerialised);
      console.log(subtopicRecommendations);
      // console.log(localStorage);
    }

    //Automatically selecting correct answer if answer is incorrect
    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute('class', 'option correct');
        option_list.children[i].insertAdjacentHTML('beforeend', tickIcon);
      }
    }
  }

  //Disabling options once one is selected
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add('disabled');
  }
  next_btn.style.display = 'block';
}

function showResultBox() {
  info_box.classList.remove('activeInfo');
  quiz_box.classList.remove('activeQuiz');
  result_box.classList.add('activeResult');
  const scoreText = result_box.querySelector('.score_text');
  let scoreTag =
    '<span>You got<p>' +
    userScore +
    '</p>out of<p>' +
    questions.length +
    '</p></span>';
  scoreText.innerHTML = scoreTag;
}

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector('.total_que');
  let totalQuesCountTag =
    '<span><p>' +
    index +
    '</p>of<p>' +
    questions.length +
    '</p>Questions</span>';
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = '0';
      timeOff.textContent = "Time's up";

      let correctAns = questions[que_count].answer;
      let allOptions = option_list.children.length;

      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute('class', 'option correct');
          option_list.children[i].insertAdjacentHTML('beforeend', tickIcon);
        }
      }
      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add('disabled');
      }
      next_btn.style.display = 'block';
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 27.75);
  function timer() {
    time += 1;
    timeLine.style.width = time + 'px';
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}
