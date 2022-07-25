import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  submit: document.querySelector('button'),
};

const handleMout = () => {
  const feedbackFormState = localStorage.getItem('feedback-form-state');
  if (feedbackFormState !== null) {
    try {
      const savedlocalStorage = JSON.parse(feedbackFormState);
      const { email, message } = savedlocalStorage;
      refs.input.value = email;
      refs.textarea.value = message;
    } catch (error) {
      console.log('parsing error');
    }
  }
};
const storage = {
  addItem() {},
  deleteItem() {},
  clear() {},
  riadItem() {},
};

const handleInput = ev => {
  ev.preventDefault();
  const velueInput = refs.input.value;
  const velueTextarea = refs.textarea.value;
  const parsedData = localStorage.getItem('feedback-form-state');

  try {
    const feedbackFormStateData = parsedData ? JSON.parse(parsedData) : {};
    feedbackFormStateData.email = velueInput;
    feedbackFormStateData.message = velueTextarea;
    updatedFeedbackFormState = JSON.stringify(feedbackFormStateData);
    localStorage.setItem('feedback-form-state', updatedFeedbackFormState);
  } catch (error) {
    console.log('parsing error');
  }
};
// очищяе форму при перезагрузці
const cleaningForm = ev => {
  ev.preventDefault();
  const feedbackFormState = localStorage.getItem('feedback-form-state');
  const savedlocalStorage = JSON.parse(feedbackFormState);
  const { email, message } = savedlocalStorage;
  console.log(savedlocalStorage);
  ev.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};
refs.form.addEventListener('input', throttle(handleInput, 500));
addEventListener('DOMContentLoaded', handleMout);
refs.form.addEventListener('submit', cleaningForm);
