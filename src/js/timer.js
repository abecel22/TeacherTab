const timerButton = document.querySelector('#timerButton');
const timerDiv = document.querySelector('.timerDiv');
const conatiner = document.querySelector('.container');

function viewTimer() {
    if(timerDiv.style.display === 'table') {
        timerDiv.style.display = 'none';
        conatiner.style.background = 'initial';
    } else {
        timerDiv.style.display = 'table';
        conatiner.style.background = 'rgba(43, 49, 38, 0.45)';
    } 
}

timerButton.addEventListener('click', viewTimer);