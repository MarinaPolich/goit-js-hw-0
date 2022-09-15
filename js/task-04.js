const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.textContent = "Видалити";
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.textContent = "Добавити";
const valueEl = document.querySelector('#value');

const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

incrementBtn.addEventListener('click', function(){
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});

decrementBtn.addEventListener('click', function() {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});