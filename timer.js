const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.querySelector('.timer');

let seconds = 0;

start.addEventListener('click', function() {
    setInterval(function() {
        seconds++;
        timer.textContent = seconds;
    }, 1000);
});

reset.addEventListener('click', function() {
    seconds = 0;
    timer.textContent = seconds;
});