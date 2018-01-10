const graderButton = document.querySelector('#graderButton');
const graderDiv = document.querySelector('.graderDiv');
const enterQuestions = document.querySelector('.questionFormSecond');
const calculateButton = document.querySelector('.calculateButton');

let totalQuestions = 0;
let points = 0;
let grade = 0;

function viewGrader() {
    if(graderDiv.style.display === 'block') {
        graderDiv.style.display = 'none';
    } else {
        graderDiv.style.display = 'block';
    }
}

function calculateGrade(totalQuestions) {
    points = 100 / totalQuestions;
    for(let i = totalQuestions; i  < 1 ; i--) {
        grade = 100 - (i * points);
        return grade;
    }
}


function getQuestions(e) {
    e.preventDefault();
    totalQuestions = this.questions.value;
    calculateGrade(totalQuestions);
}

function getQuestionsButton() {
    totalQuestions = enterQuestions.questions.value;
    calculateGrade();
}


graderButton.addEventListener('click', viewGrader);
enterQuestions.addEventListener('submit', getQuestions);
calculateButton.addEventListener('click', getQuestionsButton);