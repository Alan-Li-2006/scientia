'use strict';

const DNATag = document.querySelector('.DNA-amount');
// let amountDNA =
//   '<amount><span></span><span2></span2><h2>Your DNA: ' +
//   userDNA +
//   '</h2></amount>';

let amountDNA = `<amount><span></span><span2></span2><h2>Your DNA: &nbsp; &nbsp; <DNA class="DNA-colour">${userDNA}</DNA></h2></amount>`;

DNATag.innerHTML = amountDNA;
