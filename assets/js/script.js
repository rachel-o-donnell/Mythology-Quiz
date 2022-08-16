// dropdown code taken from w3schools adapted to suit my project

// When the user clicks on the button,toggle between hiding and showing the dropdown content W3schools
function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it W3schools changed 'var's to 'let's
window.onclick = function(event) {
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

// displaying game difficulty 

/*document.getElementById('easy').addEventListener('click', displayEasy())

function displayEasy() {
  document.getElementById('easy');

  // hides home screen when start button is pressed and replaces with game screen

/* addEventListeners(click)
function startGame() {
    document.getElementsByClassName('hide').style="display:none";
    console.log('game started')
  }
  */