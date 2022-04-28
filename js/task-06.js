const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (event) => {
  if (Number(validationInput.dataset.length) === event.currentTarget.value.trim().length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});