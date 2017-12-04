let countdown;
let totalSeconds;
let timerValue = document.querySelector('.timerVal');
const startButton = document.querySelector('#startButton');


function runTimer() {
    totalSeconds = 60;
    countdown = setInterval(() => {
        totalSeconds--;
        displayTimeLeft();
    }, 1000);
}

function displayTimeLeft() {
    
    timerValue.textContent = `00:${totalSeconds}`;
}

startButton.addEventListener('click', runTimer);
