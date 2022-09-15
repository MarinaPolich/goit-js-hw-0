const inputRange = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

textFontSize.style.fontSize = inputRange.value + "px";

inputRange.addEventListener('input', onEventRange);

function onEventRange(event) {
    textFontSize.style.fontSize = event.currentTarget.value + "px";
}