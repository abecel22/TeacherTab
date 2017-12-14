// timer button in sidebar specific
const timerButton = document.querySelector('#timerButton');
const timerDiv = document.querySelector('.timerDiv');
const conatiner = document.querySelector('.container');
//timer controls
let minutes;
let countdown;
let secondsRemaining;
const timerValue = document.querySelector('.timerVal');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const enterTime = document.querySelector('.customForm');

//view timer from click in sidebar
function viewTimer() {
    if(timerDiv.style.display === 'table') {
        timerDiv.style.display = 'none';
        conatiner.style.background = 'initial';
    } else {
        timerDiv.style.display = 'table';
        conatiner.style.background = 'rgba(43, 49, 38, 0.45)';
    } 
}

function runTimer(secondsRemaining) {
    clearInterval(countdown);
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
    enterTime.classList.remove('customForm');
    enterTime.classList.add('hideCustomForm');
    this.reset();
}

function resetTimer() {
    clearInterval(countdown);
    enterTime.classList.remove('hideCustomForm');
    enterTime.classList.add('customForm');
}

//timer button in sidebar specific
timerButton.addEventListener('click', viewTimer);
//timer
startButton.addEventListener('click', runTimer);
resetButton.addEventListener('click', resetTimer);
enterTime.addEventListener('submit', getTime);