import './big-picture.js';
import './previews.js';
import './forms.js';
import './picture-editing.js';
import './server-interaction.js';
import { createPhotos } from './previews.js';
import { bigPictureListener } from './big-picture.js';
import { getData } from './server-interaction.js';

const onSuccess = (data) => {
  createPhotos(data);
  bigPictureListener(data);
};

// eslint-disable-next-line no-console
const onError = (error) => console.log(error.message);
getData(onSuccess, onError);
