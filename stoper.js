const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const tens = document.getElementById('tens');
const seconds = document.getElementById('seconds');

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
    tens.innerHTML++;
    if(tens.innerHTML < 9){
        tens.innerHTML = '0' + tens.innerHTML;
    }
    if(tens.innerHTML > 99){
        seconds.innerHTML++;
        tens.innerHTML = '00';
    }
    if(seconds.innerHTML < 9){
        seconds.innerHTML = '0' + seconds.innerHTML;
    }
}