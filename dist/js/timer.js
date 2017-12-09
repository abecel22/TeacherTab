'use strict';

// timer button in sidebar specific
var timerButton = document.querySelector('#timerButton');
var timerDiv = document.querySelector('.timerDiv');
var conatiner = document.querySelector('.container');
//timer controls
var minutes = void 0;
var countdown = void 0;
var secondsRemaining = void 0;
var timerValue = document.querySelector('.timerVal');
var startButton = document.querySelector('#startButton');
var resetButton = document.querySelector('#resetButton');
var enterTime = document.customForm;

//view timer from click in sidebar
function viewTimer() {
    if (timerDiv.style.display === 'table') {
        timerDiv.style.display = 'none';
        conatiner.style.background = 'initial';
    } else {
        timerDiv.style.display = 'table';
        conatiner.style.background = 'rgba(43, 49, 38, 0.45)';
    }
}

function runTimer(secondsRemaining) {
    clearInterval(countdown);
    countdown = setInterval(function () {
        secondsRemaining--;
        displayTimeLeft(secondsRemaining);
    }, 1000);
}

function displayTimeLeft(secondsRemaining) {
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining % 60;
    if (sec < 10) {
        timerValue.textContent = min + ':0' + sec;
    } else {
        timerValue.textContent = min + ':' + sec;
    }
}

function getTime(e) {
    e.preventDefault();
    minutes = this.minutes.value;
    secondsRemaining = minutes * 60;
    runTimer(secondsRemaining);
    viewTimer();
    this.reset();
}

function resetTimer() {
    clearInterval(countdown);
}

//timer button in sidebar specific
timerButton.addEventListener('click', viewTimer);
//timer
startButton.addEventListener('click', runTimer);
resetButton.addEventListener('click', resetTimer);
enterTime.addEventListener('submit', getTime);