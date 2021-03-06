'use strict';

//sidebar specific
var navBarButton = document.querySelector('#clickBars');
var sideNav = document.querySelector('.sideNav');
var closeSideNav = document.querySelector('#closeNav');

// open and close sidebar
function openSideNav() {
    sideNav.style.width = '250px';
}

function closeNav() {
    sideNav.style.width = '0';
}

//sidebar specific
navBarButton.addEventListener('click', openSideNav);
closeSideNav.addEventListener('click', closeNav);