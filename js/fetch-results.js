import { editImageFormOpen } from './forms.js';

const successModal = document.querySelector('.success');
const closeSuccessModalButton = successModal.querySelector('button');
const errorModal = document.querySelector('.error');
const closeErrorModalButton = errorModal.querySelector('button');


export const fetchSuccess = () => {
  successModal.classList.remove('hidden');
};

export const fetchError = () => {
  errorModal.classList.remove('hidden');
};

closeSuccessModalButton.addEventListener('click', () => {
  successModal.classList.add('hidden');
});

closeErrorModalButton.addEventListener('click', () => {
  errorModal.classList.add('hidden');
  editImageFormOpen();
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    successModal.classList.add('hidden');
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    errorModal.classList.add('hidden');
  }
});

successModal.addEventListener('click', (evt) => {
  evt.preventDefault();
  successModal.classList.add('hidden');
});

successModal.addEventListener('click', (evt) => {
  evt.preventDefault();
  successModal.classList.add('hidden');
});
