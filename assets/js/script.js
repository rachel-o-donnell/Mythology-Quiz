const beginBtn = document.getElementById('begin');
const homeScreenElements = document.getElementsByClassName('home');
const homeContainer = document.getElementById('home-container');
const gameScreenElements = document.getElementById('q-and-a-container');


beginBtn.addEventListener('click', beginGame);


function beginGame() {

  for (let elements of homeScreenElements) {
    elements.classList.add('hide-home');
  }
  //hides home container
  homeContainer.style.display = 'none';
  console.log('LETS BEGIN');
  //shows game screen
  gameScreenElements.classList.remove('hide-game');

  //sets username in game panel
  let username = document.getElementById('name').value;
  document.getElementById('username').textContent = username;

  // sets score to zero
  let score = document.getElementById('score');
  score.innerHTML = 0;

}

let questionText = document.getElementById('question');
let answerButtons = document.getElementsByClassName('ans-btn');
let randomQuestion, currentQuestionIndex;

/* loads questions depending on difficulty chosen, randomises questions and displays 
the answer options for that particular question */

//event listener for dropdown and identifying what categoty is chosen
document.getElementById('select').addEventListener('change', function () {
  console.log(`You selected ${this.value} questions`);
  let chosenDifficulty = this.value;

  // easy section 
  if (chosenDifficulty === 'easy') {

    randomQuestion = easyCategory.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    chooseNextQuestion();
    }
  
  function chooseNextQuestion() {
      displayQuestion(randomQuestion[currentQuestionIndex]);
  }

    function displayQuestion(question) {
      questionText.innerHTML = question.question;
      //displays answers
      question.answers.forEach((answer, index) => {
        answerButtons[index].innerHTML = answer;
      });
    }
  });
        
  //medium section
  if (chosenDifficulty === 'medium') {

    randomQuestion = mediumCategory.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    chooseNextQuestion();
    displayQuestion();

 
  // hard section
  if (chosenDifficulty === 'hard') {

    randomQuestion = hardCategory.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    chooseNextQuestion();
    displayQuestion();
    }
    }


let ansA = document.getElementById('a');
ansA.addEventListener('click', ansChoice);

function ansChoice() {
console.log ("you chose ans a");
}



// GAME PANEL BAR 

// Home button pressed - goes to ghome screen - DO YOU WANT TO CLEAR THE USERNAME? OR KEEP IT? 

document.getElementById('home.btn').addEventListener('click', goHome);

function goHome() {
  gameScreenElements.classList.add('hide-game');
  for (let elements of homeScreenElements) {
    elements.classList.remove('hide-home');
  }
}

        
function score() {

}

function questionOfQuestion() {

}