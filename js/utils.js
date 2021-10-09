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

const getRndIntArray = (min, max, length) => {
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

const getRndLengthRndIntArray = (length, array) => {
  const arrayLength = getRndInteger(1, length);
  const rndArray = getRndIntArray(0, array.length - 1, arrayLength);
  // eslint-disable-next-line id-length
  return Array.from({length: arrayLength}, (item, i) => array[rndArray[i]]);
};

const getComment = (id) => ({
  id: id, // Здесь ошибка
  avatar: `img/avatar-${getRndInteger(AVATAR_INDEX.min, AVATAR_INDEX.max)}.svg`,
  message: getRndLengthRndIntArray(COMMENT_MESSAGES_MAX_LENGTH, COMMENT_MESSAGES),
  name: COMMENT_NAMES[getRndInteger(0, 9)],
});

const getComments = () => {
  const rndInt = getRndInteger(COMMENT_AMOUNT_RANGE.min, COMMENT_AMOUNT_RANGE.max);
  const array = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < rndInt; i++) {
    array.push(getComment(i));
  }
  return array;
};

export {getRndInteger, getRndIntArray, getRndLengthRndIntArray, getComments};
