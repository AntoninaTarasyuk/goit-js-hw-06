function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const color = document.querySelector('span.color');
const colorChangeButton = document.querySelector('button.change-color');

colorChangeButton.addEventListener('click', onButtonClick);
function onButtonClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}

// colorChangeButton.onclick = function() {
//   document.body.style.backgroundColor = getRandomHexColor();
//   color.textContent = getRandomHexColor();
// };