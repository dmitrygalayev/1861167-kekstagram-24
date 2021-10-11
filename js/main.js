import {getComments, getRndIntArray, getRndInteger, getRndNumberOfItemsFromArray} from './utils.js';
import {DESCRIPTIONS, LIKES_INDEX, GET_PHOTOS_INDEXES} from './constants.js';

const getPhoto = (id = 1) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRndNumberOfItemsFromArray(DESCRIPTIONS)[0],
  likes: getRndInteger(LIKES_INDEX.min, LIKES_INDEX.max),
  comments: getComments(id),
});

const getPhotos = () => getRndIntArray (GET_PHOTOS_INDEXES.min, GET_PHOTOS_INDEXES.max, GET_PHOTOS_INDEXES.length).map(
  (id) => getPhoto(id),
);


// eslint-disable-next-line no-console
console.log(getPhotos());
