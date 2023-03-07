const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const counterItem = document.querySelector('.counterItem');

let counter = 0;

decrease.addEventListener('click', function() {
    counter--;
    counterItem.textContent = counter;
});

reset.addEventListener('click', function() {
    counter = 0;
    counterItem.textContent = counter;
});

increase.addEventListener('click', function() {
    counter++;
    counterItem.textContent = counter;
});
