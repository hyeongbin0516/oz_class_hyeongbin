let stopwatch;
let isRunning = false;
let elapsedTime = 0;

function startBtn() {
    if (!isRunning) {
        isRunning = true;
        stopwatch = setInterval(updateTime, 1000);
    }
}
function stopBtn() {
    if (isRunning) {
        isRunning = false;
        clearInterval(stopwatch);
    }
}
function resetBtn() {
    stopBtn();
    elapsedTime = 0;
    updateDisplay();
}
function updateTime() {
    elapsedTime++;
    updateDisplay();
}
function updateDisplay() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;
    
    document.getElementById('stopwatch').textContent = formatTime(hours, minutes, seconds);
}
function formatTime(hours, minutes, seconds) {
    return hours + ':' + padZero(minutes) + ':' + padZero(seconds);
}
function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}