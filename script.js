'use strict';

const icon = document.querySelector('.icon');

if (localStorage.getItem('theme') == null) {
  localStorage.setItem('theme', 'light');
}

let localData = localStorage.getItem('theme');

if (localData == 'light') {
  icon.src = '/Resources/moon.png';
  document.body.classList.remove('dark-theme');
} else if (localData == 'dark') {
  icon.src = '/Resources/sun.png';
  document.body.classList.add('dark-theme');
}

icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = '/Resources/sun.png';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.src = '/Resources/moon.png';
    localStorage.setItem('theme', 'light');
  }
});

//Show Points

//Points System
if (localStorage.getItem('points') == null) {
  localStorage.setItem('points', 1000);
}

let userDNA = JSON.parse(localStorage.getItem('points'));

localStorage.setItem('points', userDNA);
console.log(userDNA);
console.log(localStorage);

//Dead code, tried to make a way to reset subtopicRecommendation to 0 for all keys quickly but didnt work

// let subtopicRecommendations = JSON.parse(
//   localStorage.getItem('suggestionValue')
// );
// subtopicRecommendations.bonds = 0;
// subtopicRecommendations.atoms = 0;
// let subRecsSerialised = JSON.stringify(subtopicRecommendations);
// localStorage.setItem('suggestionValue', subRecsSerialised);
