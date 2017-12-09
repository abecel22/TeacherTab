let minutes;
let countdown;
let secondsRemaining;
let timerValue = document.querySelector('.timerVal');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const enterTime = document.customForm;



function runTimer(secondsRemaining) {
    countdown = setInterval(() => {
        secondsRemaining--;
        displayTimeLeft(secondsRemaining);
    }, 1000);
}

function displayTimeLeft(secondsRemaining) {
    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining % 60;
    if(sec < 10) {
        timerValue.textContent = `${min}:0${sec}`;
    } else {
        timerValue.textContent = `${min}:${sec}`;
    }  
}

function getTime(e) {
    e.preventDefault();
    minutes = this.minutes.value;
    secondsRemaining = minutes * 60;
    runTimer(secondsRemaining);
    this.reset();
}

function resetTimer() {
    clearInterval(countdown);
}

startButton.addEventListener('click', runTimer);
resetButton.addEventListener('click', resetTimer);
enterTime.addEventListener('submit', getTime);