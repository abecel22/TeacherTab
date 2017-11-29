
const navBarButton = document.querySelector('#clickBars');
const sideNav = document.querySelector('.sideNav');
const closeSideNav = document.querySelector('#closeNav');

function openSideNav() {
    sideNav.style.width = '250px';
}

function closeNav() {
    sideNav.style.width = '0';
}
 
navBarButton.addEventListener('click', openSideNav);
closeSideNav.addEventListener('click', closeNav);