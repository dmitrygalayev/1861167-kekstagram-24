import {mockData} from './mocks.js';

const previewTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');
// const bigPicture = document.querySelector('.big-picture');
// const bigPictureImage = bigPicture.querySelector('.big-picture__img');
const fragment = document.createDocumentFragment();

// const onPreviewClick = (element) => {
//   element.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     bigPicture.classList.remove('hidden');
//     bigPictureImage.src = evt.target.querySelector('img').src;
//   });
// };

for (let i = 0; i < mockData.length; i++) {
  const template = previewTemplate.cloneNode(true);
  const image = template.querySelector('img');
  const likes = template.querySelector('.picture__likes');
  const comments = template.querySelector('.picture__comments');

  comments.textContent = mockData[i].comments.length;
  likes.textContent = mockData[i].likes;
  image.src = mockData[i].url;
  // onPreviewClick(template.querySelector('a'));
  fragment.appendChild(template);

}

pictureContainer.appendChild(fragment);
export {previewTemplate};

