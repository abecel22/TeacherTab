const graderButton = document.querySelector('#graderButton');
const graderDiv = document.querySelector('.graderDiv');


function viewGrader() {
    if(graderDiv.style.display === 'block') {
        graderDiv.style.display = 'none';
    } else {
        graderDiv.style.display = 'block';
    }
}


graderButton.addEventListener('click', viewGrader);