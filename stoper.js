const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let tens = document.getElementById('tens');
let seconds = document.getElementById('seconds');

let interval;

start.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

stop.onclick = function() {
    clearInterval(interval);
}

reset.onclick = function() {
    clearInterval(interval);
    tens.textContent = '00';
    seconds.textContent = '00';
    tens.innerHTML = '00';
    seconds.innerHTML = '00';
}

function startTimer() {
    tens++;
    if(tens <= 9){
        tens.innerHTML = '0' + tens;
    }
    if(tens > 99){
        seconds++;
        tens.innerHTML = '00';
    }
    if(seconds < 9){
        seconds.innerHTML = '0' + seconds;
    }
}