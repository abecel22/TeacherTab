let countdown;
let minutes;
let secondsRemaining = 180;
let timerValue = document.querySelector('.timerVal');
const startButton = document.querySelector('#startButton');



function runTimer() {
    
    countdown = setInterval(() => {
        secondsRemaining--;
        displayTimeLeft();
    }, 1000);
}

function displayTimeLeft() {
    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining % 60;
    if(sec < 10) {
        timerValue.textContent = `${min} : 0${sec}`;
    } else {
        timerValue.textContent = `${min} : ${sec}`;
    }
    
}


startButton.addEventListener('click', runTimer);