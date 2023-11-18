'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //querySelector just selects the first element with class supplied.
console.log(btnsOpenModal);

const openModal = () => {
  console.log('Button clicked');
  modal.classList.remove('hidden'); //. is only for selectors here we are passing class name.
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); //we are not calling the function we are using it when clicked that's by we don't used closeModal()

document.addEventListener('keydown', e => {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
