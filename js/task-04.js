const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

decrementEl.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});
incrementEl.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
});