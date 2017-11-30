'use strict';

var timerButton = document.querySelector('#timerButton');
var timerDiv = document.querySelector('.timerDiv');

function viewTimer() {
    timerDiv.style.display = 'table';
}

timerButton.addEventListener('click', viewTimer);