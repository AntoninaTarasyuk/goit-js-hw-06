const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let counter = 0;

decrementEl.addEventListener('click', () => {
  counter -= 1;
  counterValue.textContent = counter;
  return counterValue;
});

incrementEl.addEventListener('click', () => {
  counter += 1;
  counterValue.textContent = counter;
  return counterValue;
});