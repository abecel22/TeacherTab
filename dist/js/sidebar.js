'use strict';

//sidebar specific
var navBarButton = document.querySelector('#clickBars');
var sideNav = document.querySelector('.sideNav');
var closeSideNav = document.querySelector('#closeNav');
// timer button in sidebar specific
var timerButton = document.querySelector('#timerButton');
var timerDiv = document.querySelector('.timerDiv');
var conatiner = document.querySelector('.container');

// open and close sidebar
function openSideNav() {
    sideNav.style.width = '250px';
}

function closeNav() {
    sideNav.style.width = '0';
}

//view timer from click in sidebar
function viewTimer() {
    if (timerDiv.style.display === 'table') {
        timerDiv.style.display = 'none';
        conatiner.style.background = 'initial';
    } else {
        timerDiv.style.display = 'table';
        conatiner.style.background = 'rgba(43, 49, 38, 0.45)';
    }
}

//sidebar specific
navBarButton.addEventListener('click', openSideNav);
closeSideNav.addEventListener('click', closeNav);

//timer specific
timerButton.addEventListener('click', viewTimer);