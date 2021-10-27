import {mockData} from './mocks.js';

const previewTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');

const commentList = document.querySelector('.social__comments');
const commentListItem = commentList.querySelector('.social__comments li');

const closeButton = bigPicture.querySelector('#picture-cancel');

const createComments = (parentNode, data) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {
    const template = commentListItem.cloneNode(true);

    // const avatar = template.querySelector('img');
    // const image = template.querySelector('img');
    // const likes = template.querySelector('.picture__likes');
    // const comments = template.querySelector('.picture__comments');

    // comments.textContent = data[i].comments.length;
    // likes.textContent = data[i].likes;
    // image.src = data[i].url;
    // onPreviewClick(template.querySelector('a'));
    fragment.appendChild(template);
  }
  parentNode.textContent = '';
  parentNode.appendChild(fragment);
};
createComments(commentList, mockData);

const createPhotos = (data) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    const template = previewTemplate.cloneNode(true);
    const image = template.querySelector('img');
    const likes = template.querySelector('.picture__likes');
    const comments = template.querySelector('.picture__comments');

    comments.textContent = data[i].comments.length;
    likes.textContent = data[i].likes;
    image.src = data[i].url;
    fragment.appendChild(template);
  }
  pictureContainer.appendChild(fragment);
};

createPhotos(mockData);

pictureContainer.addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('picture__img')) {
    return;
  }
  const src = evt.target.src;
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
  bigPictureImage.src = src;
  const comments = mockData.find((item) => src.includes(item.url)).comments;
  createComments(commentList, comments);
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyKode === 27) {
    bigPicture.classList.add('hidden');
  }
});
