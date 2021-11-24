//Creating array which passes number, questions, options and answers

let allQuestions = [


  {

    numb: 21,

    question: 'What subatomic particle(s) is the nucleus composed of?',

    answer: 'Protons and Neutrons',

    options: ['Protons', 'Protons and Electrons', 'Neutrons and Electrons', 'Protons and Neutrons'],

    recommendation: 0,

},

{

    numb: 22,

    question: 'Choose the sentence that best describes the atom.',

    answer: 'Dense, heavy nucleus surrounded by electron cloud, much of which is empty space',

    options: ['Light nucleus surrounded by densely packed electrons', 'Nucleus with electrons embedded in it', 'Dense, heavy nucleus surrounded by electron cloud, much of which is empty space', 'Large nucleus that takes up majority of the space of an atom'],

    recommendation: 0,

},

{

    numb: 23,

    question: 'What type of force holds together the nucleus of an atom?',

    answer: 'Strong nuclear force',

    options: ['Strong nuclear force', 'Weak nuclear force', 'Gravity', 'Electromagnetic force'],

    recommendation: 0,

  },

  {

    numb: 24,

    question: 'What property of an atom determines what element it is?',

    answer: 'Number of protons',

    options: ['Number of electron shells', 'Number of protons', 'Number of protons added to the number of neutrons', 'Number of neutrons'],

    recommendation: 0,

  },

  {

    numb: 25,

    question: 'Which two subatomic particles have approximately the same mass?',

    answer: 'Proton and neutron',

    options: ['Proton and neutron', 'Proton and electron', 'Neutron and electron', 'None of them'],

    recommendation: 0,

  },

  {

    numb: 26,

    question: 'Choose the true statement.',

    answer: 'A proton has a positive charge while a neutron has a neutral charge',

    options: ['The nucleus is overall neutrally-charged', 'A proton has a positive charge while a neutron has a neutral charge', 'A neutron is positively charged while a proton is negatively charged', 'Electrons have no charge and conduct electricity'],

    recommendation: 0,

  },

  {

    numb: 27,

    question: 'Define mass number.',

    answer: 'Number of neutrons added to number of protons',

    options: ['Average mass of atom based on proportionality of isotopes', 'Number of neutrons added to number of electrons', 'Number of neutrons added to number of protons', 'Synonymous to atomic number'],

    recommendation: 0,

  },

  {

    numb: 28,

    question: 'Distinguish between carbon-12 and carbon-14.',

    answer: 'They have differing numbers of neutrons',

    options: ['They have differing numbers of electrons', 'They are ions of carbon with different charges', 'One is carbon, the other is another name for oxygen', 'They have differing numbers of neutrons'],

    recommendation: 0,

  },

  {

    numb: 29,

    question: 'How many times smaller are electrons compared to protons/neutrons?',

    answer: '1800',

    options: ['100', '1800', '3500', '6700'],

    recommendation: 0,

  },

  {

    numb: 30,

    question: 'What is a unique and important feature of electrons?',

    answer: 'They can interact with electrons of other atoms to create bonds',

    options: ['They are always tightly bound to nuclei of their atoms', 'They can interact with electrons of other atoms to create bonds', 'They do not conduct electricity', 'They spontaneously increase and decrease in dramatic quantities'],

    recommendation: 0,

  },

  {

    numb: 31,

    question: 'What force attracts the electrons to the nucleus?',

    answer: 'Electromagnetic force',

    options: ['Weak nuclear force', 'Gravity', 'Inertia', 'Electromagnetic force'],

    recommendation: 0,

  },

  {

    numb: 32,

    question: 'Is the electromagnetic force weaker or stronger than the force holding the nucleus together?',

    answer: 'Weaker',

    options: ['Weaker', 'Stronger', 'The same', 'No empirical data yet'],

    recommendation: 0,

  },

  {

    numb: 33,

    question: 'Which statement is true in regard to cations?',

    answer: 'There must be more protons than electrons',

    options: ['There must be more electrons than protons', 'There must be equal numbers of protons and electrons', 'The number of neutrons must exceed the number of protons', 'There must be more protons than electrons'],

    recommendation: 0,

  },

  {

    numb: 34,

    question: 'How many electrons would there be in a neutrally-charged carbon atom?',

    answer: '6',

    options: ['5', '7', '6', '8'],

    recommendation: 0,

  },

  {

    numb: 35,

    question: 'What is the name for a negatively-charged ion?',

    answer: 'Anion',

    options: ['Cation', 'Anion', 'Manion', 'Lanion'],

    recommendation: 0,

  },

  {

    numb: 36,

    question: 'Which famous Greek philosopher is associated with the conception of the atom?',

    answer: 'Democritus',

    options: ['Socrates', 'Democritus', 'Plato', 'Thales of Miletus'],

    recommendation: 0,

  },

  {

    numb: 37,

    question: 'Recall what Thomson’s model of the atom was named.',

    answer: 'Plum pudding model',

    options: ['Quantum model', 'Nuclear model', 'Plum pudding model', 'Planetary model'],

    recommendation: 0,

  },

  {

    numb: 38,

    question: 'Name the famous experiment that led to Rutherford’s conclusion that most of an atom is empty space apart from a small, dense nucleus.',

    answer: 'Gold foil experiment',

    options: ['Gold foil experiment', 'Flame test', 'Oil drop experiment', 'Nitrogen collider experiment'],

    recommendation: 0,

  },

  {

    numb: 39,

    question: 'What was Chadwick’s major improvement to the atomic model',

    answer: 'Discovery of neutrons',

    options: ['Discovery of energy levels for electrons', 'Discovery of the exact negative charge of an electron', 'Discovery of isotopes and calculate of atomic mass', 'Discovery of neutrons'],

    recommendation: 0,

  },

  {

    numb: 40,

    question: 'What is true about scientific models and theories?',

    answer: 'They are the most agreed upon explanations for the world that can be concluded based off current evidence that fit its world view',

    options: ['They are set in stone and rarely change', 'They are wild guesses and hypotheses made by scientists', 'They are the most agreed upon explanations for the world that can be concluded based off current evidence that fit its world view', 'They are always disregarded and discarded as time goes on and never looked back on again.'],

    recommendation: 0,

  },
];

//question numbers
let numbers = [];

for (let i = 0; i < 20; i++) {
  numbers.push(i+1);
}

//RNG
function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;

  while (i--) {

      j = Math.floor(Math.random() * (i+1));

      //swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

  }

  return array;
}

//total number of questions
let totalQuestions = [];

for (let i = 0; i < 20; i++) {
  totalQuestions.push(i+1);
}

//Randomising
var ranNums = shuffle(totalQuestions);
ranNums.length = 10;

//Selecting specific questions for new questions array
let questions = [];

for (let i = 0; i < ranNums.length; i++) {
  questions.push(allQuestions[ranNums[i]-1]);
}
