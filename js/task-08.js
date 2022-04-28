const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;

  if (email.trim() == '' || password.trim() == '') {
    alert('There is an empty or invalid value. In this case, the Minions will not be able to open your account. Please write down your email and password correctly.');
    return;
  } else {
    const formData = { email, password, }
    console.log(formData);
    form.reset();
  }
};