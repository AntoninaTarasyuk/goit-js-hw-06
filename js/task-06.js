const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
  if (event.target.dataset.length == event.target.value.length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});