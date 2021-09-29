function getRndInteger(min, max) {
  if (min < 0 || max < 0 || min >= max) {
    const message = 'Некорректные входные данные: min < 0, max < 0 или min >= max';
    // eslint-disable-next-line no-console
    console.log(message);
    return 0;
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
  return randomNumber;
}
getRndInteger(); // Функция №1


function commentLength (line, maximumLength) {
  return !((line.length >= maximumLength));
}
commentLength(); // Функция №2

