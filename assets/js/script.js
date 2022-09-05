const homeScreenForm = document.getElementById("home-screen");
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
let level;
let chosenDifficulty;
let correct, wrong;
let ansA = document.getElementById('a');
let ansB = document.getElementById('b');
let ansC = document.getElementById('c');
let ansD = document.getElementById('d');
let quizLength = 8;
let endMessage = document.getElementById('end-message');
let correctAns;
let currentQuestionIndex = 0;

// EVENT LISTENERS

//beginBtn.addEventListener('click', beginGame); // BEGIN BUTTON- BEGINS THE GAME
document.getElementById('home.btn').addEventListener('click', goHome); // HOME ICON - RESETS TO HOME SCREEN
playAgain.addEventListener('click', goHome); // PLAY AGAIN BUTTON - RESETS THE GAME TO THE START

// ANSWER BUTTONS - CHECKS IF THE SELECTED ANSWER IS CORRECT OR WRONG
ansA.addEventListener('click', checkAns); 
ansB.addEventListener('click', checkAns);
ansC.addEventListener('click', checkAns);
ansD.addEventListener('click', checkAns);


// SETS USERNAME IN PANEL WHEN CALLED
function setUsername() {
    let name = document.getElementById('name');
    let username = name.value;
    document.getElementById('username').textContent = username;
}

// ADDS EVENT LISTENER TO THE FORM ON HOME SCREEN THAT ONLY ALLOWS THE 
// PLAYER TO BEGIN THE GAME WHEN THE REQUIRED FIELDS ARE FILLED OUT
homeScreenForm.addEventListener("submit", event => {
    event.preventDefault();

    const userName = event.target.name?.value;
    const level = event.target.select?.value;

    if (userName && level) {
        beginGame();
    }
});

// BEGINS GAME - HIDES HOME CONTAINER , SHOWS GAME SCREEN, DISPLAYS NAME, RESETS SCORE AND QUESTION COUNTER
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

// RESETS COLOUR OF ANSWER BUTTONS

function resetAnsBtnColor() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].removeAttribute('style');
    }

}


// IDENTIFIES USERS CHOSEN DIFFICULTY FROM DROPDOWN AND LOADS AND RANDOMISES CORRESPONDING CATEGORY
document.getElementById('select').addEventListener('change', function () {
    chosenDifficulty = this.value;


    if (chosenDifficulty === 'easy') {
        chosenDifficulty = easyCategory;
        level = 'easy';
        shuffle(easyCategory);
        chooseNextQuestion();
    }

    if (chosenDifficulty === 'medium') {
        chosenDifficulty = mediumCategory;
        level = 'medium';
        shuffle(mediumCategory);
        chooseNextQuestion();
    }

    if (chosenDifficulty === 'hard') {
        chosenDifficulty = hardCategory;
        level = 'hard';
        shuffle(hardCategory);
        chooseNextQuestion();
    }
});

// Fisher yates shuffle code from Sean young on Slack. Took a few attempts to understand and how to apply to my needs

// SHUFFLES QUESTIONS OF WHATEVER CATERGORY IS CHOSEN. 
function shuffle(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}

// 
function chooseNextQuestion() {
    displayQuestion(chosenDifficulty[currentQuestionIndex]);
    queQuestionCount();
}

// NEXT BUTTON RESETS COLOR, INCREASES QUESTION COUNTER, CALLS NEXT QUESTION BUT ONLY IF AN ANSWER HAS
nextButton.addEventListener('click', function () { 
    resetAnsBtnColor();
    currentQuestionIndex++;
    chooseNextQuestion();
    questionOfQuestion();
    addClick();
    });



// DISPLAYS QUESTION AND ANSWERS 
function displayQuestion(question) {
    questionText.innerHTML = question.question;
    question.answers.forEach((answer, index) => {
        answerButtons[index].innerHTML = answer;
    });
    correctAns = question.correct_answer;
}


// CHECKS ANSWERS AND CHANGES COLOR OF SELECTED BUTTONS TO RED OR GREEN ACCORDINGLY
function checkAns() {
    if (this.innerHTML === correctAns) {
        correct = this;
        correct.style.backgroundColor = '#004600';
        adjustScore();
        removeClick();

    }
    if (this.innerHTML !== correctAns) {
        wrong = this;
        wrong.style.backgroundColor = '#8B0000';
        removeClick();
    }
}

// REMOVES EVENT LISTENERS TO ANSWER BUTTONS ONCE AN ANSWER HAS BEEN GIVEN
function removeClick() {
    ansA.removeEventListener("click", checkAns);
    ansB.removeEventListener("click", checkAns);
    ansC.removeEventListener("click", checkAns);
    ansD.removeEventListener("click", checkAns);

}

// ADDS BACK EVENT LISTENERS TO ANSWER BUTTONS WHEN NEXT BUTTON IS PRESSED.
function addClick() {
    ansA.addEventListener('click', checkAns);
    ansB.addEventListener('click', checkAns);
    ansC.addEventListener('click', checkAns);
    ansD.addEventListener('click', checkAns);

}

// GAME PANEL BAR 


// RESETS GAME TO HOME SCREEN WHEN PRESSED 

function goHome() {
    gameScreenElements.classList.add('hide-game');
    for (let elements of homeScreenElements) {
        elements.classList.remove('hide-home');
    }
    reloadGame();
}


// INSCREASES SCORE 
function adjustScore() {
    let oldScore = parseInt(score.innerText);
    score.innerText = ++oldScore;
}

// DISPLAYS WHAT QUESTION YOU ARE ON OUT OF HOW MANY AND INCREASES WHEN CALLED BY NEXT BUTTON
function questionOfQuestion() {
    let questionCount = parseInt(questionCountDisplay.innerText);
    questionCountDisplay.innerHTML = ++questionCount;
}

// CHECKS THE QUESTION COUNT AND CALLS TO END THE GAME WHEN IT REACHES 9 
function queQuestionCount() {
    if (questionCountDisplay.innerHTML >= quizLength) {
        endGame();
    }
}

// HIDES GAME SCREEN AND DISPLAYS END GAME SCREEN, 
// DISPLAYS A CUSTOM MESSAGE WITH YOUR SCORE AND CHOSEN DIFFICULTY LEVEL,
// DISPLAYS A DIFFERENT PAINTING WITH A MYTHOLOGICAL THEME DEPENDING ON LEVEL CHOSEN. 

function endGame() {
    gameScreenElements.classList.add('hide-game');
    gameContainer.classList.add('hide-game');
    endScreen.classList.remove('hide');
    gameScreenContainer.style.removeProperty('display');
    endGameContainer.style.display = 'flex';
    //endMessage()
    endMessage.innerHTML = (`${username.innerText}, you scored ${score.innerText} out of ${quizLength} in the ${level} category. Ready to play again?`);
    if (level === 'easy') {
        venus.classList.remove('hide');
        perseus.classList.add('hide');
        oedipus.classList.add('hide');
    }
    if (level === 'medium') {
        perseus.classList.remove('hide');
        oedipus.classList.add('hide');
        venus.classList.add('hide');
    }
    if (level === 'hard') {
        oedipus.classList.remove('hide');
        perseus.classList.add('hide');
        venus.classList.add('hide');
    }
}


// RELOADS GAME TO ORIGINAL GAME STATE
function reloadGame() {
    document.location.reload();
}

/*
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].removeAttribute('ans-btn:hover');
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addAttribute('ans-btn:hover');
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].classList.remove('ans-btn:hover');
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].classList.remove('ans-btn:hover');
}*/