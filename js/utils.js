import {} from './constants.js';
// // const commentLength = (line, maximumLength) => line.length <= maximumLength;
// Генерирует рандомное число в заданном диапазоне
const getRndInteger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    const message = 'Некорректные входные данные: min < 0, max < 0 или min >= max';
    // eslint-disable-next-line no-console
    console.log(message);
    return 0;
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};
// Cоединяет элементы массива с переносом строки
const getStringFromArray = (array) => array.join('\n');
// Создает массив целых чисел заданной длины в заданном диапазоне
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
// Выбирает рандомное количество элементов из массива
const getRndNumberOfItemsFromArray = (array, maxLength) => {
  const arrayLength = getRndInteger(1, maxLength) || 1;
  const rndArray = getRndIntArray(0, array.length - 1, arrayLength);
  // eslint-disable-next-line id-length
  return Array.from({length: arrayLength}, (item, i) => array[rndArray[i]]);
};

const getRandomArrayFromData = (data, count) => {
  const array = [];
  while (array.length < count) {
    const randomIndex = getRndInteger(0, data.length - 1);
    if (!array.includes(data[randomIndex])) {
      array.push(data[randomIndex]);
    }
  }
  return array;
};
export {getRndInteger, getRndIntArray, getRndNumberOfItemsFromArray, getStringFromArray, getRandomArrayFromData};
