const getRndInteger = function (min, max) {
  if (min < 0 || max < 0 || min >= max) {
    const message = 'Некорректные входные данные: min < 0, max < 0 или min >= max';
    // eslint-disable-next-line no-console
    console.log(message);
    return 0;
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};
getRndInteger(); // Функция №1

const commentLength = function (line, maximumLength) {
  return line <= maximumLength;
};
commentLength(); // Функция №2
