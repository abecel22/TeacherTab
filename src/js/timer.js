const timerButton = document.querySelector('#timerButton');
const timerDiv = document.querySelector('.timerDiv');

function viewTimer() {
    timerDiv.style.display = 'table';
}

timerButton.addEventListener('click', viewTimer);