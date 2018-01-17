'use strict';

var graderButton = document.querySelector('#graderButton');
var graderDiv = document.querySelector('.graderDiv');
var enterQuestions = document.querySelector('.questionFormSecond');
var calculateButton = document.querySelector('.calculateButton');
var tableDiv = document.querySelector('.resultsDiv');
var body = document.querySelector('body');

var totalQuestions = 0;
var points = 0;
var grade = 0;
var template = '';

function viewGrader() {
    if (graderDiv.style.display === 'block') {
        graderDiv.style.display = 'none';
        body.style.overflow = 'hidden';
    } else {
        graderDiv.style.display = 'block';
        body.style.overflow = 'auto';
    }
}

function generateTable() {
    points = 100 / totalQuestions;
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
    generateTable();
}

function getQuestionsButton() {
    totalQuestions = enterQuestions.questions.value;
    generateTable();
}

graderButton.addEventListener('click', viewGrader);
enterQuestions.addEventListener('submit', getQuestions);
calculateButton.addEventListener('click', getQuestionsButton);