import { MAX_COMMENT_LENGTH } from './constants.js';
import { effectLevel, scaleNumber } from './picture-editing.js';
import { postPhoto } from './server-interaction.js';
import { checkStringLength } from './utils/check-string-length.js';

const form = document.querySelector('#upload-select-image');
const imageUploadButton = form.querySelector('#upload-file');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancelButton = form.querySelector('#upload-cancel');
const newImageDescription = form.querySelector('.text__description');
const hashtags = form.querySelector('.text__hashtags');

export const editImageFormOpen = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');
};

const editImageFormClose = () => {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  imageUploadButton.value = '';
};

newImageDescription.addEventListener('input', (evt) => {
  if (!checkStringLength(evt.target.value, MAX_COMMENT_LENGTH)) {
    newImageDescription.setCustomValidity('Описание не должно превышать 140 символов');
  } else {
    newImageDescription.setCustomValidity('');
  }
  newImageDescription.reportValidity();
});

hashtags.addEventListener('input', (evt) => {
  evt.preventDefault();
  const normalizedValue = hashtags.value.toLowerCase();
  const values = normalizedValue.split(/\s/).filter(Boolean);

  if (!hashtags.value) {
    hashtags.setCustomValidity('');
  }
  if (values.length > 5) {
    hashtags.setCustomValidity('Нельзя указать более 5ти хэштегов');
  } else if (!(/^[а-яА-ЯёЁa-zA-Z0-9#\s]+$/).test(normalizedValue)) {
    hashtags.setCustomValidity('Хэштег не может содержать пробелы, спецсимволы и символы пунктуации');
  } else {

    for (let i = 0; i < values.length; i++) {
      const value = values[i];

      if (value.charAt() !== '#') {
        hashtags.setCustomValidity('Хэштеги должны начинаться с символа #');
        break;
      } else if (value.length === 1 || value.length > 20) {
        hashtags.setCustomValidity('Хэштег не может состоять из одной решетки или быть  длиннее 20-ти знаков');
        break;
      } else if (values.includes(value, i + 1)) {
        hashtags.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
        break;
      } else if (value.substring(1).includes('#')) {
        hashtags.setCustomValidity('Хэштег не может содержать пробелы, спецсимволы и символы пунктуации');
        break;
      } else {
        hashtags.setCustomValidity('');
      }
    }
  }
  hashtags.reportValidity();
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
  if (evt.target === hashtags || evt.target === newImageDescription) {
    return;
  }

  if (evt.keyCode === 27) {
    editImageFormClose();
  }
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.set('effect-level', effectLevel);
  formData.set('scale', `${scaleNumber}%`);
  postPhoto(formData);
  editImageFormClose();
  form.reset();
});
