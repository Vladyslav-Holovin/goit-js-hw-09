let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const emailField = document.querySelector(
  'body > form > label:nth-child(1) > input[type=email]'
);

const messageField = document.querySelector(
  'body > form > label:nth-child(2) > textarea'
);

const localStorageKey = 'feedback-form-state';

form.elements.email.value = JSON.parse(
  localStorage.getItem('feedback-form-state')
).email;

formData.email = form.elements.email.value;

form.elements.message.value = JSON.parse(
  localStorage.getItem('feedback-form-state')
).message;

formData.message = form.elements.message.value;

form.addEventListener('input', event => {
  if (event.target.nodeName == 'INPUT') {
    formData.email = event.target.value;
  }
  if (event.target.nodeName == 'TEXTAREA') {
    formData.message = event.target.value;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email == '' || formData.message == '') {
    alert('Fill please all fields');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
