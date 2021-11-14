import { FILTERS, INC, DEC, INITIAL_SLIDER_VALUE, SCALE_STEP, MAX_SCALE_VALUE } from './constants.js';

const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const initialSLiderSet = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
};
export let scaleNumber = MAX_SCALE_VALUE;
export let filterEffect =  'none';
export let effectLevel = 0;

noUiSlider.create(sliderElement, initialSLiderSet);

sliderElement.noUiSlider.on('update', (values, handle) => {
  let value = 0;
  effectLevel = values[handle];
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
  }
});

const onScaleButtonHandler = (sign) => {
  const limit = sign === INC ? MAX_SCALE_VALUE : SCALE_STEP;
  const currentScaleValue = Number(scaleValue.value.replace('%', ''));

  if (currentScaleValue === limit) {
    return;
  }
  scaleNumber = sign === INC ? currentScaleValue + SCALE_STEP : currentScaleValue - SCALE_STEP;
  scaleValue.value = `${ scaleNumber }%`;
  image.style.transform = `scale(${scaleNumber / 100})`;
};

smallerScaleButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  onScaleButtonHandler(DEC);
});

biggerScaleButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  onScaleButtonHandler(INC);
});

effectsList.addEventListener('click', (evt) => {
  if (evt.target.className === 'effects__list') {
    return;
  }
  const effect = evt.target.value;
  filterEffect = FILTERS[effect];
  image.style.filter = `${FILTERS[effect]}(${INITIAL_SLIDER_VALUE / 100})`;
  if (FILTERS[effect] !== FILTERS.none) {
    sliderElement.noUiSlider.updateOptions(
      initialSLiderSet,
      true,
    );
    sliderContainer.classList.remove('hidden');
  } else {
    image.style.filter = 'none';
    sliderContainer.classList.add('hidden');
  }
});
