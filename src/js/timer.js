//  Timer button in sidebar specific
const timerButton = document.querySelector('#timerButton');
const timerDiv = document.querySelector('.timerDiv');
const container = document.querySelector('.container');
// Timer controls
let minutes;
let countdown;
let secondsRemaining;
const timerValue = document.querySelector('.timerVal');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const enterTime = document.querySelector('.customForm');

// View timer from click in sidebar
function viewTimer() {
    if(timerDiv.style.display === 'table') {
        timerDiv.style.display = 'none';
        container.style.background = 'initial';
    } else {
        timerDiv.style.display = 'table';
        container.style.background = 'rgba(43, 49, 38, 0.6)';
    } 
}

// Start timer from set interval using seconds remaining

function runTimer(secondsRemaining) {
    clearInterval(countdown);
    countdown = setInterval(() => {
        secondsRemaining--;
        displayTimeLeft(secondsRemaining);
    }, 1000);
}

// Makes calculations of seconds and minutes and displays in DOM
function displayTimeLeft(secondsRemaining) {
    let min = Math.floor(secondsRemaining / 60);
    let sec = secondsRemaining % 60;
    if(sec < 10) {
        timerValue.textContent = `${min}:0${sec}`;
    } else {
        timerValue.textContent = `${min}:${sec}`;
    }  
}

// Gets minutes from custom form and sends secondsRemaining to runTimer function 
function getTime(e) {
    e.preventDefault();
    minutes = this.minutes.value;
    secondsRemaining = minutes * 60;
    runTimer(secondsRemaining);
    enterTime.classList.remove('customForm');
    enterTime.classList.add('hideCustomForm');
    this.reset();
}

// Clears interval and resets form 
function resetTimer() {
    clearInterval(countdown);
    timerValue.textContent = '';
    enterTime.classList.remove('hideCustomForm');
    enterTime.classList.add('customForm');
}



//timer button in sidebar specific
timerButton.addEventListener('click', viewTimer);
//timer
startButton.addEventListener('click', runTimer);
resetButton.addEventListener('click', resetTimer);
enterTime.addEventListener('submit', getTime);