const previewTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');

export const createPhotos = (data) => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < data.length; index++) {
    const template = previewTemplate.cloneNode(true);
    const image = template.querySelector('img');
    const likes = template.querySelector('.picture__likes');
    const comments = template.querySelector('.picture__comments');

    comments.textContent = data[index].comments.length;
    likes.textContent = data[index].likes;
    image.src = data[index].url;
    fragment.appendChild(template);
  }
  pictureContainer.appendChild(fragment);
};

