import { FILTERS_TYPES, RANDOM_PHOTOS_AMOUNT } from './constants.js';
import { createPhotos } from './previews.js';
import { getRandomArrayFromData } from './utils.js';
import { throttle } from './utils/throttle.js';

const filtersContainer = document.querySelector('.img-filters__form');
const pictureContainer = document.querySelector('.pictures');
const filters = filtersContainer.querySelectorAll('.img-filters__button');
const filtersDefaultButton = filtersContainer.querySelector(`#${FILTERS_TYPES.default}`);

const removePictures = () => {
  const pictures = pictureContainer.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
};

const onFilterClick = (evt, data) => {
  filters.forEach((item) => item.classList.remove('img-filters__button--active'));
  removePictures();
  switch (evt.target.id) {
    case FILTERS_TYPES.random:
      evt.target.classList.add('img-filters__button--active');
      createPhotos(getRandomArrayFromData(data, RANDOM_PHOTOS_AMOUNT));
      break;
    case FILTERS_TYPES.discussed:
      evt.target.classList.add('img-filters__button--active');
      createPhotos(data.sort((number1, number2) => number2.comments.length - number1.comments.length));
      break;
    default:
      filtersDefaultButton.classList.add('img-filters__button--active');
      createPhotos(data);
      break;
  }
};

export const attachFilterListener = (data) => {
  filtersContainer.addEventListener('click', (evt) => {
    throttle(onFilterClick(evt, data));
  });
};
