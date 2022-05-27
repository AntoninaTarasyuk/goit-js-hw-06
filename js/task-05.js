const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const nameOutputContent = nameOutput.textContent;

nameInput.addEventListener('input', (event) => {
  if (event.currentTarget.value.trim() === "") {
    nameOutput.textContent = nameOutputContent;
  } else {nameOutput.textContent = event.currentTarget.value;}
});

// nameInput.addEventListener('input', (event) => {
//   nameOutput.textContent = event.currentTarget.value.trim() === ""
//     ?nameOutputContent
//     :event.currentTarget.value
// });