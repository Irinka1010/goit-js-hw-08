import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';

// для збереження введенних у форму даних
const frmData = {};

refs.form.addEventListener('input', throttle(handleInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateTextarea();
// зберігає дані з форми
function handleInput(ev) {
  frmData[ev.target.name] = ev.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(frmData));
}
// очищає форму і localStorage
function onFormSubmit(ev) {
  ev.preventDefault();
  console.log(frmData);
  ev.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
// при перезагрузці сторінки виводить дані в форму
function populateTextarea() {
  const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (parseData) {
    try {
      parseData.email ? (refs.input.value = parseData.email) : '';
      parseData.message ? (refs.textarea.value = parseData.message) : '';
      frmData.email = refs.input.value;
      frmData.message = refs.textarea.value;
    } catch {
      console.log(error.email);
      console.log(error.message);
    }
  }
}
