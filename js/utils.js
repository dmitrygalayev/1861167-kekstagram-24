import {AVATAR_INDEX, COMMENT_MESSAGES_MAX_LENGTH, COMMENT_MESSAGES, COMMENT_NAMES, COMMENT_AMOUNT_RANGE} from './constants.js';
// // const commentLength = (line, maximumLength) => line.length <= maximumLength;

const getRndInteger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    const message = 'Некорректные входные данные: min < 0, max < 0 или min >= max';
    // eslint-disable-next-line no-console
    console.log(message);
    return 0;
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

const getStringFromArray = (array) => array.join('\n');

const getRndIntArray = (min, max, length) => {
  if(!length) {
    return;
  }
  const array = [];
  if (max - min + 1 < length) {
    // eslint-disable-next-line no-console
    console.log(max - min < length);
    return [];
  }

  for (let index = 0; index < Infinity; index++) {
    const rndInt = getRndInteger(min, max);

    if (!array.includes(rndInt)) {
      array.push(rndInt);
    }

    if (array.length === length) {
      break;
    }
  }
  return array;
};

const getRndNumberOfItemsFromArray = (array, maxLength) => {
  const arrayLength = getRndInteger(1, maxLength) || 1;
  const rndArray = getRndIntArray(0, array.length - 1, arrayLength);
  // eslint-disable-next-line id-length
  return Array.from({length: arrayLength}, (item, i) => array[rndArray[i]]);
};

const getComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRndInteger(AVATAR_INDEX.min, AVATAR_INDEX.max)}.svg`,
  message: getStringFromArray(getRndNumberOfItemsFromArray(COMMENT_MESSAGES, COMMENT_MESSAGES_MAX_LENGTH)),
  name: COMMENT_NAMES[getRndInteger(0, 9)],
});

const getComments = (
  id,
  length = getRndInteger(COMMENT_AMOUNT_RANGE.min, COMMENT_AMOUNT_RANGE.max),
// eslint-disable-next-line id-length
) => Array.from({length}, (int, i) => getComment(id + 10000 + i + 1));

export {getRndInteger, getRndIntArray, getRndNumberOfItemsFromArray, getComments, getStringFromArray};
