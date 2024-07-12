'use strict';

console.log(typeof A);
function calculate() {
  const A = parseFloat(document.getElementById('answer').value);
  if (A === 'Yes')
    document.getElementById('solutionText').textContent = 'You better beee!';
  else document.getElementById('solutionText').textContent = 'You better be!';
}

///////////////////////////////////////
//Modal Shit
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   console.log('Button clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);
