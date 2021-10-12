import {getStringFromArray, getRndIntArray, getRndInteger, getRndNumberOfItemsFromArray} from './utils.js';
import {COMMENT_MESSAGES, COMMENT_MESSAGES_MAX_LENGTH, COMMENT_NAMES, AVATAR_INDEX, COMMENT_AMOUNT_RANGE, DESCRIPTIONS, LIKES_INDEX, PHOTOS_INDEXS} from './constants.js';

const getComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRndInteger(AVATAR_INDEX.min, AVATAR_INDEX.max)}.svg`,
  message: getStringFromArray(getRndNumberOfItemsFromArray(COMMENT_MESSAGES, COMMENT_MESSAGES_MAX_LENGTH)),
  name: getRndNumberOfItemsFromArray(COMMENT_NAMES),
});

const getComments = (
  id,
  length = getRndInteger(COMMENT_AMOUNT_RANGE.min, COMMENT_AMOUNT_RANGE.max),
// eslint-disable-next-line id-length
) => Array.from({length}, (int, i) => getComment(id + 10000 + i + 1));

const getPhoto = (id = 1) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRndNumberOfItemsFromArray(DESCRIPTIONS)[0],
  likes: getRndInteger(LIKES_INDEX.min, LIKES_INDEX.max),
  comments: getComments(id),
});

const getPhotos = () => getRndIntArray (PHOTOS_INDEXS.min, PHOTOS_INDEXS.max, PHOTOS_INDEXS.max).map(
  (id) => getPhoto(id),
);


// eslint-disable-next-line no-console
console.log(getPhotos());
