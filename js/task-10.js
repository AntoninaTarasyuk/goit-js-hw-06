function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInput = document.querySelector('#controls').children[0];
const createButton = document.querySelector('#controls').children[1];
const destroyButton = document.querySelector('#controls').children[2];
const boxes = document.querySelector('#boxes');

boxes.style.display = 'flex';
boxes.style.flexDirection = 'column';
boxes.style.alignItems = 'center';

createButton.addEventListener('click', () => {
  createBoxes(numberInput.value)
});
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    const newBoxClass = 'box' + i;
    newBox.classList.add(newBoxClass);

    newBox.style.width = 20 + i*10 + 'px';
    newBox.style.height = 20 + i*10 + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    console.log(newBox);
    boxes.append(newBox);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  numberInput.value = '';
}