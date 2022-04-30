function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  if (color !== '#0') {
    return color;
  }
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

const initialBoxWidth = 30;
const initialBoxHeight = 30;
let width = initialBoxWidth;
let height = initialBoxHeight;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    
    newBox.style.width = width + 'px';
    newBox.style.height = height + 'px';
    newBox.style.backgroundColor = getRandomHexColor();

    console.log(newBox);
    boxes.append(newBox);

    width += 10;
    height += 10;
  }
};

function destroyBoxes() {
  boxes.innerHTML = '';
  numberInput.value = '';
  width = initialBoxWidth;
  height = initialBoxHeight;
};