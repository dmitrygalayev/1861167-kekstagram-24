const previewTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');

export const createPhotos = (data) => {
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
