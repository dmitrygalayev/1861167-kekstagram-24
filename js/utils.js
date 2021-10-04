export const commentLength = (line, maximumLength) => line <= maximumLength;

export const getRndInteger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    const message = 'Некорректные входные данные: min < 0, max < 0 или min >= max';
    // eslint-disable-next-line no-console
    console.log(message);
    return 0;
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

export const getRandomIntArray = (min, max, length) => {
  const array = [];
  if (max - min + 1 < length) {
    // eslint-disable-next-line no-console
    console.log(max - min < length);
    return [];
  }

  for (let index = 0; index < Infinity; index++) {
    const rndInt = getRndInteger(min, max);

    if (!array.includes[rndInt]) {
      array.push[rndInt];
    }

    if (array.length === length) {
      break;
    }
  }
  return array;
};

export const getRndLengthRndIntArray = ()
