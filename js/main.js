import './big-picture.js';
import './previews.js';
import './forms.js';
import './picture-editing.js';
import './server-interaction.js';
import './filters.js';
import { createPhotos } from './previews.js';
import { bigPictureListener } from './big-picture.js';
import { getData } from './server-interaction.js';
import { attachFilterListener } from './filters.js';

const imageFilters = document.querySelector('.img-filters');

const onSuccess = (data) => {
  createPhotos(data);
  attachFilterListener(data);
  bigPictureListener(data);
  imageFilters.classList.remove('img-filters--inactive');
};

// eslint-disable-next-line no-alert
const onError = (error) => alert(error.message);
getData(onSuccess, onError);
