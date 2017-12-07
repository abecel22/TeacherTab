'use strict';

var countdown = void 0;
var minutes = void 0;
var secondsRemaining = 180;
var timerValue = document.querySelector('.timerVal');
var startButton = document.querySelector('#startButton');

function runTimer() {

    countdown = setInterval(function () {
        secondsRemaining--;
        displayTimeLeft();
    }, 1000);
}

function displayTimeLeft() {
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining % 60;
    if (sec < 10) {
        timerValue.textContent = min + ' : 0' + sec;
    } else {
        timerValue.textContent = min + ' : ' + sec;
    }
}

startButton.addEventListener('click', runTimer);