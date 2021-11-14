import { fetchError, fetchSuccess } from './fetch-results.js';

const GET = 'https://24.javascript.pages.academy/kekstagram/data';
const POST = 'https://24.javascript.pages.academy/kekstagram';

export const getData = (onSuccess, onError) => {
  fetch(GET)
    .then((res) => res.json())
    .then((responseData) => onSuccess(responseData))
    .catch((err) => onError(err));
};

export const postPhoto = (data) => {
  // showSpinner();
  fetch(POST, {
    method: 'POST',
    body: data,
  })
    .then((res) => {
      if (res.ok) {
        fetchSuccess();
      }
    })
    .catch(fetchError)
    .finally(() => {
      // hideSpinner();
    });
};
