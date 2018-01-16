const graderButton = document.querySelector('#graderButton');
const graderDiv = document.querySelector('.graderDiv');
const enterQuestions = document.querySelector('.questionFormSecond');
const calculateButton = document.querySelector('.calculateButton');
//const table = document.querySelector('.gradeTable');
const tableDiv = document.querySelector('.resultsDiv');

let totalQuestions = 0;
let points = 0;
let grade = 0;
let template = '';

function viewGrader() {
    if(graderDiv.style.display === 'block') {
        graderDiv.style.display = 'none';
    } else {
        graderDiv.style.display = 'block';
    }
}

function calculateGrade(totalQuestions) {
    points = 100 / totalQuestions;
    for(let i = 1; i <= totalQuestions ; i++) {
        grade = 100 - (i * points);
        console.log(grade);
    }
    generateTable();
}

function generateTable() {
    let numberRight = totalQuestions;
   template =  ` 
   <table class="gradeTable" >
    <tr>
        <th># Wrong</th>
        <th>Grade</th>
        <th># Right</th>
    </tr>      
   `
   for(let i = 0; i <= totalQuestions ; i++) {
       template += `  <tr>
       <td>${i}</td>
       <td>${Math.round(100 - (i * points)) + '%'}</td>
       <td>${numberRight}</td>
     </tr>`
     numberRight--;
   }
   template += `</table>`
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