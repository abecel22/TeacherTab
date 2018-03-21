const graderButton = document.querySelector('#graderButton');
const graderDiv = document.querySelector('.graderDiv');
const enterQuestions = document.querySelector('.questionFormSecond');
const calculateButton = document.querySelector('.calculateButton');
const tableDiv = document.querySelector('.resultsDiv');
const body = document.querySelector('body');
const closeGraderButton = document.querySelector('#closeGrader');

let totalQuestions = 0;
let points = 0;
let grade = 0;
let template = '';

function viewGrader() {
    if (graderDiv.style.display === 'block') {
        graderDiv.style.display = 'none';
        body.style.overflow = 'hidden';
        tableDiv.innerHTML = '';
        enterQuestions.reset();
    } else {
        graderDiv.style.display = 'block';
        body.style.overflow = 'auto';
    }
}

function generateTable() {
    points = 100 / totalQuestions;
    let numberRight = totalQuestions;
    template = ` 
   <table class="gradeTable" >
    <tr>
        <th># Wrong</th>
        <th>Grade</th>
        <th># Right</th>
    </tr>      
   `;
    for (let i = 0; i <= totalQuestions; i++) {
        template += `  <tr>
       <td>${i}</td>
       <td>${Math.round(100 - i * points) + '%'}</td>
       <td>${numberRight}</td>
     </tr>`;
        numberRight--;
    }
    template += `</table>`;
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
closeGraderButton.addEventListener('click', viewGrader);
//function used from sidebar.js
graderButton.addEventListener('click', closeNav);
enterQuestions.addEventListener('submit', getQuestions);
calculateButton.addEventListener('click', getQuestionsButton);
