const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.querySelector('.timer');

let seconds = 0;
let isTimerRunning = false;

start.addEventListener('click', function() {
    if(isTimerRunning){

    }
});

reset.addEventListener('click', function() {
    seconds = 0;
    timer.textContent = seconds;
});

stop.addEventListener('click', function() {
    isTimerRunning = false;
});