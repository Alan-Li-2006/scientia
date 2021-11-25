'use strict'

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

// console.log(subtopicRecommendations);

const periodicTable = ["/Subjects/Chemistry/Periodic_Table/periodictable.html", "Interactive Periodic Table", "Learn more about elements in a fun hands-on experience!"];
const bonds = ["/Subjects/Chemistry/Bonds/Bonds.html", "Bonds", "Explore how elements stick together!"];
const atoms = ["/Subjects/Chemistry/Atoms/atoms.html", "Atoms", "Explore the tiny molecules that make up your world!"];
// const naturalSelection = "/Subjects/Biology/Natural-Selection/natural-selection.html";

let subRecsArray = Object.values(subtopicRecommendations);
let subRecsKeys = Object.keys(subtopicRecommendations);


function doubleKeys(array) {

    let subRecsArrayDup = [];
    array.forEach(element => {
        subRecsArrayDup.push(element);
    });
    let semiFinalRecs = [];
    let finalRecs = [];

    const max = Math.max.apply(null, subRecsArrayDup);
    semiFinalRecs.push(max);

    subRecsArrayDup.splice(subRecsArrayDup.indexOf(max), 1);
    const maxSec = Math.max.apply(null, subRecsArrayDup);
    semiFinalRecs.push(maxSec);

    if (semiFinalRecs[0] != 0)
        finalRecs.push(subRecsKeys[subRecsArray.indexOf(semiFinalRecs[0])]);
    if (semiFinalRecs[1] != 0)
        finalRecs.push(subRecsKeys[subRecsArray.indexOf(semiFinalRecs[1])]);

    return finalRecs;
}

let finalRecTopics = doubleKeys(subRecsArray);

async function appendTopic(array, index) {
    let recTag = document.querySelector('.subtopic');

    var recTopic = [];
    if (array[index] != undefined) {
        switch (array[index]) {
            case "atoms":
                recTopic = atoms;
                break;
            case "bonds":
                recTopic = bonds;
                break;
            case "periodicTable":
                recTopic = periodicTable;
                break;
        }

        const recommendedTopics =
            '<a href=' + recTopic[0] + `><subtopic${index + 1}><span></span><span2></span2><h2>` + recTopic[1] + '</h2><p>' + recTopic[2] + `</p></subtopic${index + 1}></a>`;

        recTag.innerHTML += recommendedTopics;
    }
}

appendTopic(finalRecTopics, 0);
appendTopic(finalRecTopics, 1);

let recTag = document.querySelector('.subtopic');
if (recTag.innerHTML === '') {
    alert('bruh')
}