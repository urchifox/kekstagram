import {isValid} from './form-validation.js';
import {sendData} from './network.js';
import {showMessage, onEscapePress} from './errors.js';

const submitBtn = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Отправить',
  SENDING: 'Отправляю...'
};

const blockSubmitButton = () => {
  submitBtn.disabled = true;
  submitBtn.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitBtn.disabled = false;
  submitBtn.textContent = SubmitButtonText.IDLE;
};


const setFormSubmit = async (evt, onSuccess) => {
  evt.preventDefault();
  if (isValid) {
    blockSubmitButton();
    try {
      await sendData(new FormData(evt.target));
      onSuccess();
      showMessage('success');
      document.addEventListener('keydown', onEscapePress);
    } catch (err) {
      showMessage('error');
      document.addEventListener('keydown', onEscapePress);
    }
    unblockSubmitButton();
  }
};


export {setFormSubmit};
