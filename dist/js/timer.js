'use strict';

var minutes = void 0;
var countdown = void 0;
var secondsRemaining = void 0;
var timerValue = document.querySelector('.timerVal');
var startButton = document.querySelector('#startButton');
var resetButton = document.querySelector('#resetButton');
var enterTime = document.customForm;

function runTimer(secondsRemaining) {
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
    this.reset();
}

function resetTimer() {
    clearInterval(countdown);
}

startButton.addEventListener('click', runTimer);
resetButton.addEventListener('click', resetTimer);
enterTime.addEventListener('submit', getTime);