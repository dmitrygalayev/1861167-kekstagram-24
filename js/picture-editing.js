const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');
const filterButtons = document.querySelectorAll('.effects__radio');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const FILTERS = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
  none: '',
};
const INITIAL_SLIDER_VALUE = 80;
const SCALE_STEP = 25;
const MAX_SCALE_VALUE = 100;
let scaleNumber = MAX_SCALE_VALUE;
let filterEffect =  'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', (values, handle) => {
  let value = 0;
  switch (filterEffect) {
    case FILTERS.sepia:
      image.style.filter = `${filterEffect}(${values[handle] / 100})`;
      break;
    case FILTERS.chrome:
      image.style.filter = `${filterEffect}(${values[handle] / 100})`;
      break;
    case FILTERS.marvin:
      image.style.filter = `${filterEffect}(${values[handle]}%)`;
      break;
    case FILTERS.phobos:
      image.style.filter = `${filterEffect}(${Math.round(values[handle] / 30)}px)`;
      break;
    case FILTERS.heat:
      value = Math.round(values[handle] / 30);
      if (value < 1) {
        value = 1;
      }
      image.style.filter = `${filterEffect}(${value})`;
      break;
    default:
      break;
  }
});

smallerScaleButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  const currentScaleValue = Number(scaleValue.value.replace('%', ''));

  if (currentScaleValue === SCALE_STEP) {
    return;
  }
  scaleNumber = currentScaleValue - SCALE_STEP;
  scaleValue.value = `${ scaleNumber }%`;
  image.style.transform = `scale(${scaleNumber / 100})`;

});

biggerScaleButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const currentScaleValue = Number(scaleValue.value.replace('%', ''));

  if (currentScaleValue === MAX_SCALE_VALUE) {
    return;
  }
  scaleNumber = currentScaleValue + SCALE_STEP;
  scaleValue.value = `${ scaleNumber }%`;
  image.style.transform = `scale(${scaleNumber / 100})`;
});

filterButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const effect = evt.target.value;
    filterEffect = FILTERS[effect];
    image.style.filter = `${FILTERS[effect]}(${INITIAL_SLIDER_VALUE / 100})`;
    if (FILTERS[effect] !== FILTERS.none) {
      sliderContainer.classList.remove('hidden');
    } else {
      sliderContainer.classList.add('hidden');
    }
  });
});
