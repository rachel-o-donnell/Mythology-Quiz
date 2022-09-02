const beginBtn = document.getElementById('begin');
const homeScreenElements = document.getElementsByClassName('home');
const homeContainer = document.getElementById('home-container');
const gameScreenContainer = document.getElementById('game-screen-container');
const gameScreenElements = document.getElementById('q-and-a-container');
const nextButton = document.getElementById('next');
const gameContainer = document.getElementById('game-container');
const endGameContainer = document.getElementById('end-game-container');
const endScreen = document.getElementById('end-screen');
const playAgain = document.getElementById('play-again');
const venus = document.getElementById('venus');
const perseus = document.getElementById('perseus');
const oedipus = document.getElementById('oedipus');
let score = document.getElementById('score');
let questionCountDisplay = document.getElementById('question-count-display');
let questionText = document.getElementById('question');
let answerButtons = document.getElementsByClassName('ans-btn');
let randomQuestion, chosenDifficulty;
let correct, wrong;
//let currentQuestionIndex = 0;
let currentGameQuestions = [];
let ansA = document.getElementById('a');
let ansB = document.getElementById('b');
let ansC = document.getElementById('c');
let ansD = document.getElementById('d');
let quizLength = 8;
let endMessage = document.getElementById('end-message');
let selectedAns;

// EVENT LISTENERS
beginBtn.addEventListener('click', beginGame);
document.getElementById('home.btn').addEventListener('click', goHome);
// PLAY AGAIN BUTTON - RESETS THE GAME TO THE START
playAgain.addEventListener('click', goHome);

ansA.addEventListener('click', checkAns);
ansB.addEventListener('click', checkAns);
ansC.addEventListener('click', checkAns);
ansD.addEventListener('click', checkAns);
//begins game - hides home container, shows game screen, sets username in game panel, sets score to zero

function setUsername() {
    let name = document.getElementById('name');
    let username = name.value;
    document.getElementById('username').textContent = username
}

function beginGame() {

    for (let elements of homeScreenElements) {
        elements.classList.add('hide-home');
    }
    homeContainer.style.display = 'none';
    gameScreenContainer.style.display = 'flex';
    gameScreenElements.classList.remove('hide-game');
    setUsername();
    score.innerHTML = 0;
    questionCountDisplay.innerHTML = 1;

}


function resetAnsBtnColor() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeAttribute('style');
    }
}

document.getElementById('select').addEventListener('change', function() {
  chosenDifficulty = this.value;
  console.log(chosenDifficulty);
  if (chosenDifficulty === 'easy') {
    chosenDifficulty = easyCategory;
    shuffle(easyCategory);
    console.log('SHUFFLE EASY');
    console.log(easyCategory);
    chooseNextQuestion();
  }

 if (chosenDifficulty === 'medium') {
    chosenDifficulty = mediumCategory
    shuffle(mediumCategory);
    console.log('SHUFFLE MEDIUM');
    console.log(mediumCategory);
    chooseNextQuestion();
  } 

  if (chosenDifficulty === 'hard') {
    chosenDifficulty = hardCategory
    shuffle(hardCategory);
    console.log('SHUFFLE HARD');
    console.log(hardCategory);
    chooseNextQuestion();
  } 
});

/*
function shuffle() {
  randomQuestion = chosenDifficulty.sort(() => Math.random() - .5); 
}
*/

// Fisher yates shuffle code from Sean young on Slack. Took a few attempts to understand and how to apply to my needs

function shuffle(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
   // let currentGameQuestions = questions; 

}


function chooseNextQuestion() {
  let currentQuestionIndex = 0;
/*  for (let i = 0, i <== questions.length, i++) {
    console.log(questions)
  }
  */
  displayQuestion(chosenDifficulty[currentQuestionIndex]);
  queQuestionCount();
  
  //currentQuestionIndex ++
  //question++


  /*
  tutor support :
  chooseNextQuestion(currentQuestionIndex);
  chooseNextQuestion(index) {
  displayQuestion(easyCategory[index]);
}
 */
}

function displayQuestion(question) {
  questionText.innerHTML = question.question;
  //displays answers
  question.answers.forEach((answer, index) => {
      answerButtons[index].innerHTML = answer;
  })

  correctAns = question.correct_answer;
    console.log(correctAns);

}
    //selectedAns = this.innerHTML

function checkAns() {

  console.log('you selected ' + this.innerHTML);
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
//}

nextButton.addEventListener('click', function() {
  resetAnsBtnColor();
  //shuffle(easyCategory);
  chooseNextQuestion();
  questionOfQuestion();
});

//function chooseNextQuestion() {
// displayQuestions(category[index]);
//}

/* loads questions depending on difficulty chosen, randomises questions and displays 
the answer options for that particular question */

//event listener for dropdown and identifying what category is chosen

/*
// easy section 
if (chosenDifficulty === 'easy') {
    shuffle(easyCategory);
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
    });

    let correctAns = question.correct_answer;
    console.log(correctAns);

    ansA.addEventListener('click', checkAns);
    ansB.addEventListener('click', checkAns);
    ansC.addEventListener('click', checkAns);
    ansD.addEventListener('click', checkAns);

    function checkAns() {

        console.log('you selected ' + this.innerHTML);
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
    });
}

//medium section
if (chosenDifficulty === 'medium') {
    shuffle(mediumCategory);
    //randomQuestion = mediumCategory.sort(() => Math.random() - .5);
    //currentQuestionIndex = 0;
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

    // hard section
    if (chosenDifficulty === 'hard') {
        shuffle(hardCategory);
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
}) //

*/ 
// GAME PANEL BAR 

// Home button pressed - goes to ghome screen - DO YOU WANT TO CLEAR THE USERNAME? OR KEEP IT? 


function goHome() {
    gameScreenElements.classList.add('hide-game');
    for (let elements of homeScreenElements) {
        elements.classList.remove('hide-home');
    }
    homeContainer.removeAttribute('style');
    gameScreenContainer.removeAttribute('style');
    gameContainer.classList.remove('hide-game');
    endGameContainer.classList.add('hide');
    endGameContainer.removeAttribute('style');
    /* for (let elements of endGameContainer) {
       elements.classList.add('hide');
     } */
}

function adjustScore() {
    let oldScore = parseInt(score.innerText);
    score.innerText = ++oldScore;
}

function questionOfQuestion() {
    console.log('questionCountDisplay');
    let questionCount = parseInt(questionCountDisplay.innerText);
    questionCountDisplay.innerText = ++questionCount;
}

function queQuestionCount() {
    if (questionCountDisplay.innerHTML >= quizLength) {
        console.log('queQuestionCount');
        endGame();
    }
        //chooseNextQuestion();
   // } else {
   //     endGame();
    //}
}

function endGame() {
    gameScreenElements.classList.add('hide-game');
    gameContainer.classList.add('hide-game');
    endScreen.classList.remove('hide');
    gameScreenContainer.style.removeProperty('display');
    endGameContainer.style.display = 'flex';
    //endMessage()
    endMessage.innerHTML = (`You scored ${score.innerText} out of 8 in the ${chosenDifficulty} category. Ready to play again?`);
    if (chosenDifficulty === 'easy') {
        venus.classList.remove('hide');
    }
    if (chosenDifficulty === 'medium') {
        perseus.classList.remove('hide');
    }
    if (chosenDifficulty === 'hard') {
        oedipus.classList.remove('hide');
    }
}

/*
function endMessage() {
endMessage.innerHTML = (`You scored ${score.innerText} out of 8 in the ${chosenDifficulty} category. Ready to play again?`);
    if (chosenDifficulty === 'easy') {
        venus.classList.remove('hide');
    }
    if (chosenDifficulty === 'medium') {
        perseus.classList.remove('hide');
    }
    if (chosenDifficulty === 'hard') {
        oedipus.classList.remove('hide');
    }
  }
  */