import {getComments, getRndIntArray} from './utils.js';
import {DESCRIPTION, ID_INDEX, URL_INDEX, LIKES_INDEX} from './constants.js';

const getObject = (amount) => ({
  id: getRndIntArray(ID_INDEX.min, ID_INDEX.max, amount),
  url: `photos/${getRndIntArray(URL_INDEX.min, URL_INDEX.max, amount)}.jpg`,
  description: DESCRIPTION,
  likes: getRndIntArray(LIKES_INDEX.min, LIKES_INDEX.max, LIKES_INDEX.length),
  comments: getComments(),
});

getObject();
