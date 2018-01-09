const graderButton = document.querySelector('#graderButton');
const graderDiv = document.querySelector('.graderDiv');
const enterQuestions = document.querySelector('.questionFormSecond');
const calculateButton = document.querySelector('.calculateButton');

let totalQuestions = 0;

function viewGrader() {
    if(graderDiv.style.display === 'block') {
        graderDiv.style.display = 'none';
    } else {
        graderDiv.style.display = 'block';
    }
}

function getQuestions(e) {
    e.preventDefault();
    totalQuestions = this.questions.value;
    console.log(totalQuestions);
}

function getQuestionsButton() {
    totalQuestions = enterQuestions.questions.value;
    console.log(totalQuestions);
}


graderButton.addEventListener('click', viewGrader);
enterQuestions.addEventListener('submit', getQuestions);
calculateButton.addEventListener('click', getQuestionsButton);