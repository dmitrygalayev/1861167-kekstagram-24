const getRndInteger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    const message = 'Некорректные входные данные: min < 0, max < 0 или min >= max';
    // eslint-disable-next-line no-console
    console.log(message);
    return 0;
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};
getRndInteger(); // Функция №1

// eslint-disable-next-line arrow-body-style
const commentLength = (line, maximumLength) => line <= maximumLength;
commentLength(); // Функция №2
