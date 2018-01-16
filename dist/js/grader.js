'use strict';

var graderButton = document.querySelector('#graderButton');
var graderDiv = document.querySelector('.graderDiv');
var enterQuestions = document.querySelector('.questionFormSecond');
var calculateButton = document.querySelector('.calculateButton');
//const table = document.querySelector('.gradeTable');
var tableDiv = document.querySelector('.resultsDiv');

var totalQuestions = 0;
var points = 0;
var grade = 0;
var template = '';

function viewGrader() {
    if (graderDiv.style.display === 'block') {
        graderDiv.style.display = 'none';
    } else {
        graderDiv.style.display = 'block';
    }
}

function calculateGrade(totalQuestions) {
    points = 100 / totalQuestions;
    for (var i = 1; i <= totalQuestions; i++) {
        grade = 100 - i * points;
        console.log(grade);
    }
    generateTable();
}

function generateTable() {
    var numberRight = totalQuestions;
    template = ' \n   <table class="gradeTable" >\n    <tr>\n        <th># Wrong</th>\n        <th>Grade</th>\n        <th># Right</th>\n    </tr>      \n   ';
    for (var i = 0; i <= totalQuestions; i++) {
        template += '  <tr>\n       <td>' + i + '</td>\n       <td>' + (Math.round(100 - i * points) + '%') + '</td>\n       <td>' + numberRight + '</td>\n     </tr>';
        numberRight--;
    }
    template += '</table>';
    tableDiv.innerHTML = template;
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