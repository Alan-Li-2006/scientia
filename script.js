'use strict';

const icon = document.querySelector('.icon');

if (localStorage.getItem('theme') == null) {
  localStorage.setItem('theme', 'light');
}

let localData = localStorage.getItem('theme');

if (localData == 'light') {
  icon.src = '../Resources/moon.png';
  document.body.classList.remove('dark-theme');
} else if (localData == 'dark') {
  icon.src = '../Resources/sun.png';
  document.body.classList.add('dark-theme');
}

icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    icon.src = '../Resources/sun.png';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.src = '../Resources/moon.png';
    localStorage.setItem('theme', 'light');
  }
});
