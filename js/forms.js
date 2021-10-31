// import { body } from './bigPicture.js';

const body = document.querySelector('body');
const imageUploadButton = body.querySelector('#upload-file');
const uploadOverlay = body.querySelector('.img-upload__overlay');
const uploadCancelButton = body.querySelector('#upload-cancel');
const newImageDescription = body.querySelector('.text__description');

const editImageFormOpen = () => {
  body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
};

const editImageFormClose = () => {
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
};

newImageDescription.addEventListener('invalid', () => {
  if (newImageDescription.validity.tooLong) {
    newImageDescription.setCustomValidity('Описание не должно превышать 140 символов');
  } else {
    newImageDescription.setCustomValidity('');
  }
});

imageUploadButton.addEventListener('change', (evt) => {
  evt.preventDefault();
  editImageFormOpen();
});

uploadCancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  editImageFormClose();
  imageUploadButton.setCustomValidity('');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    editImageFormClose();
  }
});


