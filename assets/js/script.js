const beginBtn = document.getElementById('begin');
const homeScreenElements = document.getElementsByClassName('home');
const homeContainer = document.getElementById('home-container');
const gameScreenContainer = document.getElementById('game-screen-container')
const gameScreenElements = document.getElementById('q-and-a-container');
const nextButton = document.getElementById('next');
const gameContainer = document.getElementById('game-container');
const endGameContainer = document.getElementById('end-game-container')
const endScreen = document.getElementById('end-screen');
let username = document.getElementById('name').value;
let score = document.getElementById('score');
let questionCountDisplay = document.getElementById('question-count-display');
let questionText = document.getElementById('question');
let answerButtons = document.getElementsByClassName('ans-btn');
let randomQuestion, chosenDifficulty;
let correct, wrong;
let currentQuestionIndex = 0;
let currentGameQuestions = {}
let ansA = document.getElementById('a');
let ansB = document.getElementById('b');
let ansC = document.getElementById('c');
let ansD = document.getElementById('d');
let quizLength = 8;
let endMessage = document.getElementById('end-message')


// EVENT LISTENERS
beginBtn.addEventListener('click', beginGame);
document.getElementById('home.btn').addEventListener('click', goHome);

//begins game - hides home container, shows game screen, sets username in game panel, sets score to zero

function beginGame() {

  for (let elements of homeScreenElements) {
    elements.classList.add('hide-home');
  }
  homeContainer.style.display = 'none';
  gameScreenContainer.style.display = 'flex';
  gameScreenElements.classList.remove('hide-game');
  username.textContent = username;
  score.innerHTML = 0;
  questionCountDisplay.innerHTML = 1;
  
}

// Fisher yates shuffle code from Sean young on Slack. Took a few attempts to understand and how to apply to my needs
function shuffle(questions) {
  for(let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
  return questions
  //let currentGameQuestions = questions;  

};

function resetAnsBtnColor() {
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].removeAttribute('style')
  
  }
}

//function chooseNextQuestion() {
 // displayQuestions(category[index]);
//}

/* loads questions depending on difficulty chosen, randomises questions and displays 
the answer options for that particular question */

//event listener for dropdown and identifying what categoty is chosen
document.getElementById('select').addEventListener('change', function () {
  console.log(`You selected ${this.value} questions`);
 chosenDifficulty = this.value;
 
//})

  // easy section 
  if (chosenDifficulty === 'easy') {
    shuffle(easyCategory)  
    chooseNextQuestion();
    
  }
 
  

  function chooseNextQuestion() {
  displayQuestion(easyCategory[currentQuestionIndex]);
  queQuestionCount();
  }


  function displayQuestion(question) {
    
     
    questionText.innerHTML = question.question;
    //displays answers
    question.answers.forEach((answer, index) => {
      answerButtons[index].innerHTML = answer;
    })
  

    let correctAns = question.correct_answer;
    console.log(correctAns)

    ansA.addEventListener('click', checkAns);
    ansB.addEventListener('click', checkAns);
    ansC.addEventListener('click', checkAns);
    ansD.addEventListener('click', checkAns);

    function checkAns() {

      console.log('you selected ' + this.innerHTML)
      if (this.innerHTML === correctAns) {
        console.log('correct!');
        correct = this;
        correct.style.backgroundColor = '#004600';
        adjustScore();
        
      }
      if (this.innerHTML !== correctAns) {
        console.log('wrong');
        wrong = this;
        wrong.style.backgroundColor = '#8B0000';
        
      }
    }

    nextButton.addEventListener('click', function() {
      resetAnsBtnColor();
      shuffle(easyCategory);
      chooseNextQuestion();
      questionOfQuestion();
    })
    
  }
}) //
/* 
//medium section
  if (chosenDifficulty === 'medium') {
    shuffle(mediumCategory)

    //randomQuestion = mediumCategory.sort(() => Math.random() - .5);
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
    shuffle(hardCategory)
    //randomQuestion = hardCategory.sort(() => Math.random() - .5);
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
*/



// GAME PANEL BAR 

// Home button pressed - goes to ghome screen - DO YOU WANT TO CLEAR THE USERNAME? OR KEEP IT? 


function goHome() {
  gameScreenElements.classList.add('hide-game');
  for (let elements of homeScreenElements) {
    elements.classList.remove('hide-home');
  }
}


function adjustScore() {
 
  let oldScore = parseInt(score.innerText);
  score.innerText = ++oldScore;


}

function questionOfQuestion() {
  console.log('questionCountDisplay')
  let questionCount = parseInt(questionCountDisplay.innerText)
  questionCountDisplay.innerText = ++questionCount
  
}

function queQuestionCount() {
if (questionCountDisplay.innerHTML <= quizLength) {
 console.log('queQuestionCount')
  //chooseNextQuestion();
}
else {
  endGame()
}
}

function endGame() {
  gameScreenElements.classList.add('hide-game');
  gameContainer.classList.add('hide-game');
  endScreen.classList.remove('hide');
  endGameContainer.style.display = 'flex';
  endMessage.innerHTML= (`You scored ${score.innerText} out of 8 in the ${chosenDifficulty} category. Ready to play again?`)
  //document.createElement('img');


 // let statsText = document.createElement('h2');
 // statsText.innerHTML = `Congratulations you scored ${score} in ${chosenDifficulty}`
  //let gameScreen = document.getElementById('game-screen')
  //let endGameDisplay = document.createAttribute('div');
  //const tryAgain = endGameDisplay.document.createElement('button');
  //tryAgain.innerHTML = "Try again"
  
}
//game over 
//tally the points?/difficulty etc

//play again 

//button to return to home screen 