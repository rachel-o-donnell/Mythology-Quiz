  // dropdown code taken from w3schools adapted to suit my project

  // When the user clicks on the button,toggle between hiding and showing the dropdown content W3schools
  function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it W3schools
  window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // HIDES HOME SCREEN // ADDS GAME SCREEN // SETS USERNAME credit for structure in README - altered to fit my needs.

  const beginBtn = document.getElementById('begin');

  const homeScreenElements = document.getElementsByClassName('home');
  const gameScreenElements = document.getElementById('q-and-a-container');
  beginBtn.addEventListener('click', beginGame);


  function beginGame() {
    for (let elements of homeScreenElements) {
      elements.classList.add('hide-home')
    }
    console.log('LETS BEGIN')
    //shows game screen
    gameScreenElements.classList.remove('hide-game')

    //sets username in game panel
    let username = document.getElementById('name').value
    document.getElementById('username').textContent = username

  }

  let questionText = document.getElementById('question')
  let answerButtons = document.getElementsByClassName('ans-btn')
  let randomQuestion, currentQuestionIndex

  /* loads questions depending on difficulty chosen, randomises questions and displays 
  the answer options for that particular question */

  //event listener for dropdown and identifying what categoty is chosen
  document.getElementById('select').addEventListener('change', function () {
        console.log(`You selected ${this.value} questions`)
        let chosenDifficulty = this.value

        // easy section 
        if (chosenDifficulty === 'easy') {

          randomQuestion = easyCategory.sort(() => Math.random() - .5)
          currentQuestionIndex = 0
          chooseNextQuestion()

          function chooseNextQuestion() {
            displayQuestion(randomQuestion[currentQuestionIndex])
          }

          function displayQuestion(question) {
            questionText.innerHTML = question.question
            //displays answers
            question.answers.forEach((answer, index) => {
              answerButtons[index].innerHTML = answer
            })
          }
        }
//medium section
        if (chosenDifficulty === 'medium') {

          randomQuestion = mediumCategory.sort(() => Math.random() - .5)
          currentQuestionIndex = 0
          chooseNextQuestion()

          function chooseNextQuestion() {
            displayQuestion(randomQuestion[currentQuestionIndex])
          }

          function displayQuestion(question) {
            questionText.innerHTML = question.question
            //dislays answers
            question.answers.forEach((answer, index) => {
              answerButtons[index].innerHTML = answer
            })
          }
        }
// hard section
        if (chosenDifficulty === 'hard') {

          randomQuestion = hardCategory.sort(() => Math.random() - .5)
          currentQuestionIndex = 0
          chooseNextQuestion()

          function chooseNextQuestion() {
            displayQuestion(randomQuestion[currentQuestionIndex])
          }

          function displayQuestion(question) {
            questionText.innerHTML = question.question
           // displays answers
            question.answers.forEach((answer, index) => {
              answerButtons[index].innerHTML = answer
            })
          }
        }
      })

function rightAns() {

}

        function wrongAns() {

        }

        function nextButton() {

        }

        // GAME PANEL BAR 

        // Home button pressed - goes to ghome screen - DO YOU WANT TO CLEAR THE USERNAME? OR KEEP IT? 
        document.getElementById('home.btn').addEventListener('click', goHome)

        function goHome() {
          gameScreenElements.classList.add('hide-game')
          for (let elements of homeScreenElements) {
            elements.classList.remove('hide-home')
          }
        }

        function score() {

        }

        function questionOfQuestion() {

        };


 // GAME SCREEN 

        /* choosing game difficulty WITH API

        let displayQuestion = document.getElementById('question')
        let displayAnswers = document.getElementsByClassName('q-btn')

        document.getElementById('select').addEventListener('change', function() {
            console.log(`You selected ${this.value} questions`)
            let chosenDifficulty = this.value

              if (chosenDifficulty === 'easy') {

                fetch('https://opentdb.com/api.php?amount=11&category=20&difficulty=easy&type=multiple')
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    displayQuestion.innerHTML = data.results[0].question
                    displayAnswers.innerHTML = data.results[0].answer
                  })
                }
                if (chosenDifficulty === 'medium') {

                  fetch('https://opentdb.com/api.php?amount=11&category=20&difficulty=medium&type=multiple')
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data);
                      displayQuestion.innerHTML = data.results[0].question
                    })
                  }

                  if (chosenDifficulty === 'hard') {

                    fetch('https://opentdb.com/api.php?amount=11&category=20&difficulty=hard&type=multiple')
                      .then((response) => response.json())
                      .then((data) => {
                        console.log(data);
                        //let questions = data.results[0].question//NEED TO LOOP THROUGH QUESTIONS [0] WILL ALWAYS DISPLAY THE FIRST QUESTIONS
                        console.log(questions)
                        //let displayQuestion = questions.sort(() => Math.random() - .5) //web dev simlified
                        displayQuestion.innerHTML = data.results[0].question
                      })
                    }
                       // SHUFFLE QUESTIONS .sort(() => Math.random() - .5) 
                       //- wont work as is when added to data.results[0].question

            }) */