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

// choosing game difficulty 
/*
 not sure if this will work to rename the button but this was my attempt but I can use it to fetch the api 
 code taken from https://www.youtube.com/watch?v=zgHim4ZDpZY changed to suit my project 

const difficulty = ['easy', 'medium', 'hard'];

function selectDifficulty() {

  difficulty.forEach(option => {
    fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=${difficulty}&type=multiple')
    .then(response => response.json())
    .then(data = console.log(data))
  })

}; 
*/

// displaying game difficulty 


/*" keep getting error messages that either OPTION IS NOT DEFINED/ addevent listener is not a function  "
let option = document.getElementsByTagName('a');
let dropdownBtnText = document.getElementById('dropdown-btn').textcontent;

  function displaySelectedOption() {
    if (option.textContent === "Easy") {
      dropdownBtnText = 'Difficuly: Easy'
    } else if (option.textContent === "Medium") {
      dropdownBtnText = "Difficuly: Medium"
    } else if (option.textContent === "Hard") {
      dropdownBtnText = "Difficuly: Hard"
    }
  }
  option.addEventListener('click', displaySelectedOption())

*/

// hides home screen when start button is pressed and replaces with game screen

/* addEventListeners(click)
function startGame() {
    document.getElementsByClassName('hide').style="display:none";
    console.log('game started') 
 } */