'use strict';

var navBarButton = document.querySelector('#clickBars');
var sideNav = document.querySelector('.sideNav');
var closeSideNav = document.querySelector('#closeNav');

function openSideNav() {
    sideNav.style.width = '250px';
}

function closeNav() {
    sideNav.style.width = '0';
}

navBarButton.addEventListener('click', openSideNav);
closeSideNav.addEventListener('click', closeNav);