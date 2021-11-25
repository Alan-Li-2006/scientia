'use strict';

const DNATag = document.querySelector('.DNA-amount');
// let amountDNA =
//   '<amount><span></span><span2></span2><h2>Your DNA: ' +
//   userDNA +
//   '</h2></amount>';

let amountDNA = `<amount><span></span><span2></span2><h2>Your DNA Points: &nbsp; &nbsp; <DNA class="DNA-colour">${userDNA}</DNA></h2></amount>`;

DNATag.innerHTML = amountDNA;

let neophyte = document.getElementById('neophyte');
let scientiaGenius = document.getElementById('scientiaGenius');

neophyte.addEventListener('click', function () {
  userDNA -= 100;
  localStorage.setItem('points', userDNA);
  setTimeout(function () {
    window.location.reload();
  }, 100);
});

scientiaGenius.addEventListener('click', function () {
  userDNA -= 200000;
  localStorage.setItem('points', userDNA);
  setTimeout(function () {
    window.location.reload();
  }, 100);
});
