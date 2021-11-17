export const getRndInteger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    const message = 'Некорректные входные данные: min < 0, max < 0 или min >= max';
    throw new Error (message);
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

export const getRandomArrayFromData = (data, count) => {
  const array = [];
  while (array.length < count) {
    const randomIndex = getRndInteger(0, data.length - 1);
    if (!array.includes(data[randomIndex])) {
      array.push(data[randomIndex]);
    }
  }
  return array;
};
