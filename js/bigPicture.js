import { STEP } from './constants.js';
import { mockData } from './mocks.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const closeButton = bigPicture.querySelector('#picture-cancel');
const pictureContainer = document.querySelector('.pictures');
const commentList = bigPicture.querySelector('.social__comments');
const overlay = document.querySelector('.overlay');
const commentListItem = bigPicture.querySelector('.social__comment');
const commentsLoadButton = bigPicture.querySelector('.social__comments-loader');
const totalCommentsCount = bigPicture.querySelector('.comments-count');
const visibleCommentsCount = bigPicture.querySelector('.visible-comments-count');


let commentsArray = [];
let currentCommentsCount = STEP;

const createComments = (parentNode, data, startIndex = 0, currentStep = STEP, clearNode = true) => {
  const fragment = document.createDocumentFragment();
  const commentsCount = data.length > currentStep ? currentStep : data.length;

  if (clearNode) {parentNode.textContent = '';}

  for (let i = startIndex; i < commentsCount; i++) {
    const commentTemplate = commentListItem.cloneNode(true);
    const commentContent = commentTemplate.querySelector('img');
    const commentText = commentTemplate.querySelector('p');

    commentContent.src = data[i].avatar;
    commentContent.alt = data[i].name;
    commentText.textContent = data[i].message;

    fragment.appendChild(commentTemplate);
  }
  commentList.appendChild(fragment);
};

const bigPictureOpen = () => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
};
const bigPictureClose = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
};

const onPictureContainerClick = (evt) => {
  if (!evt.target.classList.contains('picture__img')) {
    return;
  }

  evt.preventDefault();
  bigPictureOpen();
  const src = evt.target.src;
  bigPictureImage.src = src;

  const {comments, description} = mockData.find((item) => src.includes(item.url));
  commentsArray = [...comments];
  currentCommentsCount = STEP;

  if (comments.length === 0) {
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
  } else if (comments.length < 5 && comments.length > 0) {
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
    visibleCommentsCount.textContent = comments.length < STEP ? comments.length : STEP;
    totalCommentsCount.textContent = comments.length;
  } else {
    totalCommentsCount.textContent = comments.length;
    visibleCommentsCount.textContent = comments.length < STEP ? comments.length : STEP;
    bigPicture.querySelector('.comments-loader').classList.remove('hidden');
    bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  }

  bigPicture.querySelector('.social__caption').textContent = description;
  createComments(commentList, comments);
};

commentsLoadButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  createComments(commentList, commentsArray, currentCommentsCount, currentCommentsCount + STEP, false);
  currentCommentsCount = currentCommentsCount + STEP;
  visibleCommentsCount.textContent =
    currentCommentsCount > commentsArray.length ? commentsArray.length : currentCommentsCount;
  if (currentCommentsCount >= commentsArray.length) {
    bigPicture.querySelector('.comments-loader').classList.add('hidden');// toDo вынести в константу
  }
});

pictureContainer.addEventListener('click', onPictureContainerClick);

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPictureClose();
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPictureClose();
  }
});

overlay.addEventListener('click', (evt) => {
  if (evt.target === overlay) {
    bigPictureClose();
  }
});
