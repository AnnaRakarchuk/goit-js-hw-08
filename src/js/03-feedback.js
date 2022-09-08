import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

// Cховище оновлювалюється не частіше, ніж раз на 500 мілісекунд
formEl.addEventListener('input', throttle(onEmailMessageSave, 500));
formEl.addEventListener('submit', onSubmit);

populateInput();

//  Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
//  у яких зберігай поточні значення полів форми
function onEmailMessageSave(evt) {
  evt.preventDefault();

  const emailInput = formEl.elements.email.value;
  const messageInput = textareaEl.value;

  formData = { email: emailInput, message: messageInput };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Під час завантаження сторінки перевіряй стан сховища, 
// і якщо там є збережені дані, заповнюй ними поля форми

function populateInput() {
  const saveInput = localStorage.getItem(STORAGE_KEY);

  if (saveInput) {
    const parsSaveInput = JSON.parse(saveInput);
    textareaEl.value = parsSaveInput.message || '';
    formEl.elements.email.value = parsSaveInput.email || '';
  }
}

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, 
// message та їхніми поточними значеннями
function onSubmit(evt) {
  evt.preventDefault();

  const saveInput = localStorage.getItem(STORAGE_KEY);

  if (saveInput) {
    const parsSaveInput = JSON.parse(saveInput);
    console.log(parsSaveInput);
  }

  localStorage.removeItem(STORAGE_KEY);

  evt.currentTarget.reset();
}
