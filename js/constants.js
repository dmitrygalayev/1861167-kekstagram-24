const DESCRIPTIONS = ['Ещё одно потрясающее фото', 'Фото с котом', 'Фото в горах', 'Фото на пляже', 'Фото в пивной'];
const AVATAR_INDEX = {
  min: 1,
  max: 6,
};
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const COMMENT_MESSAGES_MAX_LENGTH = 2;
const COMMENT_NAMES = ['Филарет', 'Дионис', 'Ахиллес', 'Агамемнон', 'Одиссей',
  'Ариадна', 'Психея','Гера', 'Афина', 'Арес'];

const PHOTOS_INDEXS = {
  min: 1,
  max: 25,
};
const LIKES_INDEX = {
  min: 15,
  max: 200,
};
const COMMENT_AMOUNT_RANGE = {
  min: 0,
  max: 20,
};

export const STEP = 5;

export const MAX_COMMENT_LENGTH = 140;

export const FILTERS = {
  chrome: 'grayscale',
  sepia: 'sepia',
  marvin: 'invert',
  phobos: 'blur',
  heat: 'brightness',
  none: '',
};

export const INC = 'increment';
export const DEC = 'decrement';

export const INITIAL_SLIDER_VALUE = 100;
export const SCALE_STEP = 25;
export const MAX_SCALE_VALUE = 100;

export {PHOTOS_INDEXS, COMMENT_MESSAGES, DESCRIPTIONS, AVATAR_INDEX, COMMENT_MESSAGES_MAX_LENGTH, COMMENT_NAMES, LIKES_INDEX, COMMENT_AMOUNT_RANGE};
