function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsBox = document.querySelector('.controls');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createBtn.addEventListener('click', openInput);
destroyBtn.addEventListener('click', clearBox);

function openInput(event) {
  createBoxes(input.value);
}

function createBoxes(amount) {
  let boxSize = 30;
  for(let i=0; i<=amount; i++) {
    const box = document.createElement('div');
    box.style.width = boxSize + (10*i) + 'px';
    box.style.height = boxSize + (10*i) + 'px';
    box.style.margin = '5px';
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.append(box);
  }
}

function clearBox(event) {
  boxesDiv.remove();
  input.value = '';
}


