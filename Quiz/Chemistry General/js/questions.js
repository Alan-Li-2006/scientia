//Creating array which passes number, questions, options and answers

let allQuestions = [


  {
      numb: 1,

      question: 'How are two elements bonded together different from 2 substances being mixed together?',

      answer: 'The bonded elements have a strong chemical connection between atoms while a mixture has two substances, physically mixed',

      options: ['The bonded elements can be more easily separated than the mixture', 'The bonded elements have higher electric charge than the mixture', 'The bonded elements have a strong chemical connection between atoms while a mixture has two substances, physically mixed', 'The bonded elements are permanently stuck together while the mixture can be easily separated'],

      recommendation: 0,

  },

  {

      numb: 2,

      question: 'Why do chemical bonds form between atoms?',

      answer: 'In order to reach the most stable and lowest-energy states',

      options: ['No particular reason; inherently arbitrary', 'In order to reach the most stable and lowest-energy states', 'In order to become more unstable and reactive', 'In order to achieve lower densities'],

      recommendation: 0,

  },

  {

      numb: 3,

      question: 'What is the octet rule and which group of atoms give an important clue to its validity?',

      answer: 'Atoms want to have 8 valence electrons; clue given by noble gases',

      options: ['Atoms want to have 8 valence electrons; clue given by noble gases', 'Atoms want to have 18 valence electrons; clue given by transition metals', 'Atoms want to have 8 valence electrons; clue given by halogens', 'Atoms want to have 18 valence electrons; clue given by alkali solutions'],

      recommendation: 0,

    },

    {

      numb: 4,

      question: 'What will atoms do in order to satisfy the octet rule or reach a full valence shell of electrons?',

      answer: 'Lose, share and gain electrons',

      options: ['Lose, share and gain electrons', 'Gain more neutrons', 'Gain more protons', 'Rearrange its electron structure by transferring low-energy electrons to higher energy shells'],

      recommendation: 0,

    },

    {

      numb: 5,

      question: 'Which groups of atoms see ionic bonds being formed?',

      answer: 'Non-metals and metals',

      options: ['Non-metals and metals', 'Metals and metals', 'Non-metals and non-metals', 'Transition metal and alkali earth metal'],

      recommendation: 0,

    },

    {

      numb: 6,

      question: 'What is the first component in the formation of an ionic bond?',

      answer: 'The transferral of valence electrons from one atom to another to reach the most stable states of both atoms (octet rule)',

      options: ['The sharing of valence electrons', 'The electrostatic attraction between atoms', 'The transferral of valence electrons from one atom to another to reach the most stable states of both atoms (octet rule)', 'The jumping of electrons from one energy level to another and then back again, which releases energy'],

      recommendation: 0,

    },

    {

      numb: 7,

      question: 'What is the second component in the formation of an ionic bond?',

      answer: 'The electrostatic attraction between ions',

      options: ['The sharing of valence electrons', 'The electrostatic attraction between ions', 'The transferral of valence electrons from one atom to another to reach the most stable states of both atoms (octet rule)', 'The jumping of electrons from one energy level to another and then back again, which releases energy'],

      recommendation: 0,

    },

    {

      numb: 8,

      question: 'Considering that phosphorus is in Group 15 (V) of the periodic table, what is the ion that phosphorus forms?',

      answer: 'P³⁻',

      options: ['P²⁺', 'P³⁺', 'P²⁻', 'P³⁻'],

      recommendation: 0,

    },

    {

      numb: 9,

      question: 'Name the chemical formula of the ionic compound, aluminium sulphide.',

      answer: 'Al₂S₃',

      options: ['Al₅S₃', 'Al₂S', 'AlS₃', 'Al₂S₃'],

      recommendation: 0,

    },

    {

      numb: 10,

      question: 'How are ions arranged in ionic compounds?',

      answer: 'Repeating, predictable 3D pattern of a lattice crystal',

      options: ['Separate molecules', 'Loosely connected ions in sea of electrons', 'Irregular, incongruent pattern', 'Repeating, predictable 3D pattern of a lattice crystal'],

      recommendation: 0,

    },

    {

      numb: 11,

      question: 'State an example of an ionic compound',

      answer: 'Magnesium chloride',

      options: ['Oxygen', 'Water', 'Carbon dioxide', 'Magnesium chloride'],

      recommendation: 0,

    },

    {

      numb: 12,

      question: 'Which statement is true?',

      answer: 'Metals usually lose electrons while non-metals gain them when forming ionic bonds',

      options: ['Metals usually gain electrons while non-metals lose them when forming ionic bonds', 'Metals and non-metals both gain and lose electrons in ionic bonds', 'Metals usually lose electrons while non-metals gain them when forming ionic bonds', 'Both metals and non-metals neither lose or gain electrons when forming ionic bonds'],

      recommendation: 0,

    },

    {

      numb: 13,

      question: 'What electron interaction do covalent bonds involve?',

      answer: 'The sharing of valence electrons',

      options: ['The sharing of valence electrons', 'The electrostatic attraction between atoms', 'The transferral of valence electrons from one atom to another to reach the most stable states of both atoms (octet rule)', 'The jumping of electrons from one energy level to another and then back again, which releases energy'],

      recommendation: 0,

    },

    {

      numb: 14,

      question: 'Where are covalent bonds more common than ionic bonds?',

      answer: 'Molecules of living organisms and carbon-based organic molecules like DNA',

      options: ['Molecules of living organisms and carbon-based organic molecules like DNA', 'Salts like NaCl', 'Non-organic compounds', 'Solids and non-fluids'],

      recommendation: 0,

    },

    {

      numb: 15,

      question: 'Which covalent bond type is the strongest?',

      answer: 'Triple',

      options: ['Single', 'Double', 'Triple', 'Mono'],

      recommendation: 0,

    },

    {

      numb: 16,

      question: 'How many pairs of valence electrons does a double bond share?',

      answer: '2',

      options: ['0', '2', '4', '6'],

      recommendation: 0,

    },

    {

      numb: 17,

      question: 'Distinguish between polar and non-polar covalent molecules.',

      answer: 'A polar molecule has a slightly negative charge at one end and a slightly positive charge at the other while a non-polar molecule has no charge throughout',

      options: ['A non-polar molecule has a slightly negative charge at one end and a slightly positive charge at the other while a polar molecule has no charge throughout', 'Polar molecules have stronger covalent bonds that non-polar molecules', 'Polar molecules are harder to dissolve than non-polar molecules', 'A polar molecule has a slightly negative charge at one end and a slightly positive charge at the other while a non-polar molecule has no charge throughout'],

      recommendation: 0,

    },

    {

      numb: 18,

      question: 'State an example of a polar covalent molecule.',

      answer: 'Water',

      options: ['Methane', 'Oxygen', 'Water', 'Lithium fluoride'],

      recommendation: 0,

    },

    {

      numb: 19,

      question: 'Describe what a metallic bond is.',

      answer: 'Electrostatic attractive force between a sea of conduction electrons and positively charged metal ionss',

      options: ['Electrostatic attractive force between a sea of conduction electrons and positively charged metal ions', 'A chemical bond that involves the sharing of electron pairs between atoms', 'Chemical bonding that involves the electrostatic attraction between oppositely charged ions', 'A bond that connects metals by melting and then recombining into one'],

      recommendation: 0,

    },

    {

      numb: 20,

      question: 'Which property of metals does metallic bonding account for?',

      answer: 'Conductor of electricity and heat',

      options: ['Poor conductivity (insulation)', 'Shiny surface', 'Conductor of electricity and heat', 'Hardness and density'],

      recommendation: 0,

    },

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

for (let i = 0; i < 40; i++) {
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

for (let i = 0; i < 40; i++) {
  totalQuestions.push(i+1);
}

//Randomising
var ranNums = shuffle(totalQuestions);
ranNums.length = 20;

//Selecting specific questions for new questions array
let questions = [];

for (let i = 0; i < ranNums.length; i++) {
  questions.push(allQuestions[ranNums[i]-1]);
}
