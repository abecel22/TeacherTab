'use strict';

var countdown = void 0;
var totalSeconds = void 0;
var timerValue = document.querySelector('.timerVal');
var startButton = document.querySelector('#startButton');

function runTimer() {
    totalSeconds = 60;
    countdown = setInterval(function () {
        totalSeconds--;
        displayTimeLeft();
    }, 1000);
}

function displayTimeLeft() {

    timerValue.textContent = '00:' + totalSeconds;
}

startButton.addEventListener('click', runTimer);