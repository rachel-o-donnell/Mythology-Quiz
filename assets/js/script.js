const beginBtn = document.getElementById('begin');
const homeScreenElements = document.getElementsByClassName('home');
const homeContainer = document.getElementById('home-container');
const gameScreenElements = document.getElementById('q-and-a-container');
let username = document.getElementById('name').value;
let score = document.getElementById('score');
let questionText = document.getElementById('question');
let answerButtons = document.getElementsByClassName('ans-btn');
let randomQuestion, currentQuestionIndex;

// EVENT LISTENERS
beginBtn.addEventListener('click', beginGame);
document.getElementById('home.btn').addEventListener('click', goHome);


//begins game - hides home container, shows game screen, sets username in game panel, sets score to zero

function beginGame() {

  for (let elements of homeScreenElements) {
    elements.classList.add('hide-home');
  }
  homeContainer.style.display = 'none';
  gameScreenElements.classList.remove('hide-game');
  username.textContent = username;
  score.innerHTML = 0;
}

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

//medium section
  if (chosenDifficulty === 'medium') {

    randomQuestion = mediumCategory.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    chooseNextQuestion()
  
    function displayQuestion(question) {
      questionText.innerHTML = question.question;
      //displays answers
      question.answers.forEach((answer, index) => {
        answerButtons[index].innerHTML = answer;
      });
    }


  // hard section
  if (chosenDifficulty === 'hard') {

    randomQuestion = hardCategory.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    chooseNextQuestion();

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
  }
}
});

let ansA = document.getElementById('a');
ansA.addEventListener('click', ansChoice);

function ansChoice() {
  console.log("you chose ans a");
}



// GAME PANEL BAR 

// Home button pressed - goes to ghome screen - DO YOU WANT TO CLEAR THE USERNAME? OR KEEP IT? 


function goHome() {
  gameScreenElements.classList.add('hide-game');
  for (let elements of homeScreenElements) {
    elements.classList.remove('hide-home');
  }
}


function adjustscore() {

}

function questionOfQuestion() {

}