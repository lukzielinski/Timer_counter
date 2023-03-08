const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let interval;

start.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

stop.onclick = function() {
    clearInterval(interval);
}