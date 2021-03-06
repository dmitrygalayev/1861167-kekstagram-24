import { mockData } from './mocks.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const closeButton = bigPicture.querySelector('#picture-cancel');
const pictureContainer = document.querySelector('.pictures');
const commentList = bigPicture.querySelector('.social__comments');
const overlay = document.querySelector('.overlay');
const commentListItem = bigPicture.querySelector('.social__comment');


const createComments = (parentNode, data) => {
  const fragment = document.createDocumentFragment();
  parentNode.textContent = '';
  for (let i = 0; i < data.length; i++) {
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
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  const {comments, description} = mockData.find((item) => src.includes(item.url));

  bigPicture.querySelector('.social__caption').textContent = description;
  createComments(commentList, comments);
};

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

overlay.addEventListener('click', () => {
  bigPictureClose();
});
