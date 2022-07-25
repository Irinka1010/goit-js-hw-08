import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  submit: document.querySelector('button'),
};
const STORAGE_KEY = 'feedback-form-state';
const feedback = localStorage.getItem(STORAGE_KEY);
const formData = JSON.parse(feedback);

//  запускається при перезагрузці сторінки
const handleMout = () => {
  if (feedback !== null) {
    try {
      const { email, message } = formData;
      refs.input.value = email;
      refs.textarea.value = message;
    } catch (error) {
      console.log('parsing error');
    }
  }
};
// при введенні даних в імпут
const handleInput = ev => {
  ev.preventDefault();
  const velueInput = refs.input.value;
  const velueTextarea = refs.textarea.value;

  try {
    const feedbackData = feedback ? JSON.parse(feedback) : {};
    feedbackData.email = velueInput;
    feedbackData.message = velueTextarea;
    updatedFeedbackData = JSON.stringify(feedbackData);
    localStorage.setItem('feedback-form-state', updatedFeedbackData);
  } catch (error) {
    console.log('parsing error');
  }
};
// очищує форму при submit
const cleaningForm = ev => {
  ev.preventDefault();
  console.log(formData);
  ev.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};
refs.form.addEventListener('input', throttle(handleInput, 500));
addEventListener('DOMContentLoaded', handleMout);
refs.form.addEventListener('submit', cleaningForm);
