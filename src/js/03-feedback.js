import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  submit: document.querySelector('button'),
};

const handleMout = () => {
  const feedbackFormState = localStorage.getItem('feedback-form-state');

  try {
    const savedlocalStorage = JSON.parse(feedbackFormState);
    const { email, message } = savedlocalStorage;
    refs.input.value = email;
    refs.textarea.value = message;
  } catch (error) {
    console.log('parsing error');
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
  const feedbackFormState = localStorage.getItem('feedback-form-state');
  try {
    const feedbackFormStateData = feedbackFormState
      ? JSON.parse(feedbackFormState)
      : {};
    feedbackFormStateData.email = velueInput;
    feedbackFormStateData.message = velueTextarea;
    const updatedFeedbackFormState = JSON.stringify(feedbackFormStateData);
    localStorage.setItem('feedback-form-state', updatedFeedbackFormState);
  } catch (error) {
    console.log('parsing error');
  }
};
const cleaningForm = ev => {
  ev.preventDefault();
  const feedbackFormState = localStorage.getItem('feedback-form-state');

  const savedlocalStorage = JSON.parse(feedbackFormState);
  console.log(savedlocalStorage);
  refs.input.value = '';
  refs.textarea.value = '';
  localStorage.removeItem('feedback-form-state');
};
refs.form.addEventListener('input', throttle(handleInput, 500));
addEventListener('DOMContentLoaded', handleMout);
refs.form.addEventListener('submit', cleaningForm);
