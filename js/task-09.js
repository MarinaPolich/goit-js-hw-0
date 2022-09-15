function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.body;
const changeBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

changeBtn.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}