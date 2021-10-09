const DESCRIPTION = 'Ещё одно потрясающее фото';
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
const ID_INDEX ={
  min: 1,
  max: 25,
};
const URL_INDEX ={
  min: 1,
  max: 25,
};
const LIKES_INDEX = {
  min: 15,
  max: 200,
  length: 185,
};
const COMMENT_ID_INDEX = {
  min: 1,
  max: 100000,
  length: 99999,
};
const COMMENT_AMOUNT_RANGE = {
  min: 1,
  max: 10,
};
export {COMMENT_MESSAGES, DESCRIPTION, AVATAR_INDEX, COMMENT_MESSAGES_MAX_LENGTH, COMMENT_NAMES, ID_INDEX, URL_INDEX, LIKES_INDEX, COMMENT_ID_INDEX, COMMENT_AMOUNT_RANGE};
