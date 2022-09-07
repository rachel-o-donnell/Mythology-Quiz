# WELCOME TO THE MYTHOLOGY QUIZ 

![This is an image](/assets/images/read-me-images/home-responsive.png)

A multiple choice quiz for lovers of Greek mythology set in a sreen with a backdrop of one of the most famous paintings on this theme, Chamber of the Giants by Giulio Romano.

There is 3 difficulty levels to choose from easy, medium and hard so players of all levels are welcome!

---

## UX/UI:

**Target Audience:**

Lovers or enthusiasts of Greek mythology and fine art. A multiple choice method makes it more accessable to different knowledge levels as well as the choice to step up the challenge by choosing different difficulty levels. 

**Site Goals:** 

Users can easily navigate the game by use of of simple box displaying all interactive elements. Users can enter their initials coose a level of difficulty and begin the game. All buttons have a hover feature helping a player to distinguish where their cursor is on the screen. On the game screen the player can clearly see icons at the top of the screen with a clickable home button that bring them back to the home screen at any point in the game, a user icon displays their own initials that they entered, an icon of a tropy displays the score and a question icon shows the user what question they are on out of 8 . 

Each quesion is displayed with 4 options for answers, users can skip a question by pressing the next button, and control when they see the next question if they want to study the answer. After an answer is clicked a color change will occur -green for correct red for incorrect. When the player has answered 8 questions an end game screen will appear displaying a personalised message with the players name, score and level difficulty. A painting of a mythological significance will be displayed and the player has the option to play the game again, if they wish.

The game is fully responsive.

**User Stories:**

As a user I can enter my initials so I can personalise my experience.
As a user I can choose different difficulties so I can challenge myself further when I am ready.
As a user I can see my score go up and my answer button turn red or green so I can see if I have answered correctly.
As a user I can control when I see the next question so I can study the answer if I have answered incorrectly.
As a user I can press the next button so I skip a question if I dont want to guess.
As a user I can play again immediately so I can see if I can beat my last score.
As a user I can click the home button so I can exit to the home screen if I no longer want to play or want to change difficulty.

**Colour choice:**

I wanted a color scheme to feel classic, rich while remain somewhat neutral - they needed to feel like old colors of the time. I was very much inspired by the color choice of the below image for its calming, warm and complementary tones. 

![This is an image](/assets/images/read-me-images/color-inspo.png)

**Colours**
 Based on this I started pulling out some tones and ended up with the below palette.

 - #e3a857 - ochre
 - #6E6259 - slate gray
 - #FAFAD2 - pale yellow
 - #380456 - dark purple 
 - #301934 - darker purple: I addded the darker purple font for more acceability while being a complimentary color to the mustard.
 - #8B0000 - red : I opted for richer palette for the red and green that would appear older and sit within the mustard and not appear garish.
 - #004600 - green

![This is an image](/assets/images/read-me-images/main-color.png)
![This is an image](/assets/images/read-me-images/%20button-color.png)
![This is an image](/assets/images/read-me-images/light-yellow.png)
![This is an image](/assets/images/read-me-images/dark-purple.png)
![This is an image](/assets/images/read-me-images/darker-purple.png)
![This is an image](/assets/images/read-me-images/red.png)
![This is an image](/assets/images/read-me-images/green.png)
![This is an image](/assets/images/read-me-images/red-and-green.png)

**Fonts:**

Google Fonts:

Cormorant+Garamond Classic but with a little opulant decoration

![This is an image](/assets/images/read-me-images/fonts.png)

**Imagery:**


*I do not have the rights to these images they are used for educational purposes only.*

**Background image:**

![This is an image](/assets/images/chamber.png)

  Chamber of the Giants by Giulio Romano

This rich ceiling painting provides a great backdrop as it features so many mythical characters, drawing the player in spiraling around the game screen.

  *"It tells the story of the fall of the giants, as described by the Latin poet Ovid in his Metamorphoses. The god Jupiter is pictured on the ceiling, surrounded by the entire Roman cosmogony. The painting shows the moment he threw his lighting to destroy the giants. On the surrounding walls, there are images of crumbling buildings and desperate giants trying to escape."*
  quote taken directly from https://www.atlasobscura.com/places/chamber-of-the-giants

**End of game images:** 

  I wanted to show a different painting going from most easily recocniseable to more obscure as you go along to represent the categories themselves. 
  This research solidified my choice of color scheme as all images look at home within the game screen and create a beautifully indulgent pattern contrast when layered

**Easy:**

  The Birth of Venus by Botticelli (1486).
  ![This is an image](/assets/images/read-me-images/venus-end-screen.png)

**Medium:**
  “Perseus and Andromeda” by Frederic Leighton

  ![This is an image](/assets/images/read-me-images/perseus-end-screen.png)

**Hard:**
  "Oedipus and the Sphinx" by Gustave Moreau 

  ![This is an image](/assets/images/read-me-images/oedipus-end-screen.png)

## Wireframes:

Wireframes were made with Balsamiq and can be found [here](assets/wireframes-new/)
My original wireframes were for a game on the Celtic Wheel that would still have a game screen in the centre of an image but had a very different layout. This all changed when I decided to try using an API to generate questions.

---

## FEATURES:

**Background image:** 

Once I found the background image I knew is would work perfectly to act as a background that would draw the players attention to the centre of the screen with its circular layout while still being an incredible texture compliment to the flat ochre screen.

**Game screen**

![This is an image](/assets/images/read-me-images/game-screen.png)

The game plays out on three different screens that change as the user progresses. Each screen keeps the same colors for a smoother user expereiemce. It is fully responsive with layout of the whole screen being consistent in style across different screen sizes save for a Answer buttons being stacked for a mobile device.

**Enter initials:**

![This is an image](/assets/images/read-me-images/initials.png)

 The user enters their initials for a personalised experience

**Drop down menu:**

![This is an image](/assets/images/read-me-images/dropdown.png)

 The user can choose from 3 different categories, easy, medium or hard.

**Game Panel:** 

![This is an image](/assets/images/read-me-images/game-panel.png)

The game panel  consists of 4 displays accompanying icon that can be easily read visually.
    
* Home icon - a clickable icon bringing the user to the home screen without having to use the back button 
* Username - diplays the initials of the user that they entered in the previous screen
* Score - displays your score
* Questions - displays what question you are on out of 8 

The latter 3 icons are not clickable and the pointer visually tells this to the user.

**Question and Ansers:**

![This is an image](/assets/images/read-me-images/q-and-a.png)

Questions and answers are chosen at random and displayed in the centre of the screen. Each question have 4 answer options in button form. The button chosem will imediately turn red for incorrect and green for correct, visually telling the user is they are correct or not. The correct anwer is always displayed if an incorrect ans was chposen for a better learning experience.

**Personalised message:**

The end screen displays a personal message to the user and an overview of their completed game. 

![This is an image](/assets/images/read-me-images/custom-end-msg.png)

**Play again:**

Allows users to immediatly play again if they wish to beat their score.

---

## TECHNOLOGIES USED:

* Html
* Css
* Javascript 

---

## TESTING:

Devices tested:

 * Iphone 11
 * Iphone 
 * MotoG7power
 * MacBook Air
 * Ipad
 * 32" monitor
 * Samsung Galaxy S8
 * Samsung Galaxy Ultra
 * Tested in responsive form in Chrome Dev tools.

**Browsers tested:**

 * Firefox
 * Brave
 * Chrome
 * Safari

**Validator Testing:**

* HTML:
   No errors are returned when passing through the official W3C validator.
* CSS: 
   No errors are returned when passing through the official Jigsaw validator.
* JShint: 
   No errors are returned when passing through the official JShint.
* https://beautifier.io/: 
  Completed

**Lighthouse**

Mobile Pages:
![This is an image](/assets/images/read-me-images/lighthouse-mobile.png)

Desktop Pages:
![This is an image](/assets/images/read-me-images/lighthouse-desktop.png)

## Testing game elements :


| FEATURE | EXPEXT | ACTION | RESULT |
| ----- | ------- | ------ | ------ |
| Enter initials area | Input area requires the player to enter their initials before the game can be played |  Pressed begin button without entering| Player is prompted to enter initials before game can be played|
|Dropdown menu | Player must select a difficulty setting before game can be played | Pressed begin button without choosing a level | layer must select a difficulty setting before game can be played. |
| Dropdown button | Each button on the dropdown menu works, displays questions and answers from category chosen and defaults to choose difficulty when game resets | Chose each category, logged the answer sets to the console to check the category | Each button on the dropdown menu works, displays questions and answers from category chosen and defaults to choose difficulty when game resets|
| Begin button | Begin button will start the game and load the game screen. | Pressed begin button (after submiting initials and difficulty | Begin button starts the game and load the game screen. |
| Home icon  |   Pressing home button brings you to the home screen and resets the game | Clicked home button | Home button resets game and bring to home screen when pressed |
| Username display| Username displays inputted initials from home screen on the right og the user icon | Entered initials into username input | Username displays inputted username on the right of the user icon |
| Score display | Game screen displays a score of zero on the right of the trophy icon and increases by 1 each time the player answers correctly but stays the same if answered incorrectly. | Played the game to the end answering correctly and incorrectly  | Score begins at zero increases with each correct ans and stays the same when answered incorrectly |
| Question counter | Question counter displays to the right of the question icon. It begins at 1/8 and increases with each new question until it reaches 8/8 | Played game from start to finish | Question counter displays to the right of the ? icon. It begins at 1/8 and increases with each new question until it reaches 8 | 
| Questions | Questions are not repeated in a game. | Played each level repeatedly. | Questions are not repeated in a game.|
| Answer Buttons | Player can only select one answer button, and attempts to click will not incur a color change | Click an answer button , then tried to click all other answers.| Can not select more than one answer. Game no longer recocgnises the click or changes the color of the buttons. |
| Correct answer | Correct answer button turns green when selected | Selected the correct answer | Correct answer button turns green when selected |
| Incorrect answer | Incorrect answer button turns red when selected and shows the correct answer in green | Selected an incorrect answer | Incorrect answer button turns red when selected and the correct answer turns green|
| Next Button | Next button skips to next question, whether an anwer is chosen or not. | Clicked next button with and without answering a question|  Next button then works when an answer is given and skips to next question without an answer.|
| End Game | Game ends when player has answered 8 questions.| Played game to the end | Game ends when player has answered 8 questions.|
| End screen message | The players initials, score and reminder of what category was played on the end screen. | Played the game multiple times on all levels to the end, with different initials, and different scores. The inputted initials, score and reminder of what category was played on the end screen. 
| End screen picture| A different picture is displayed when you reach the end game screen depending on the category chosen  - Easy: Venus, Medium: Perseus, Hard: Oedipus | Played each game repeatedly until the end screen appears | A different picture is displayed when you reach the end game screen depending on the category chosen - Easy: Venus, Medium: Perseus, Hard: Oedipus|
| Play again button | Resets game to home screen and resets to the default settings allowing the player to choose a new level or a new player can enter their initials without having to clear the last players.  | PLayed game multiple times on  different levels using the play again button. | Resets game to home screen and resets to the default settings. Initial area is clear waiting foe input and dropdown prompts to choose a difficulty. 

--- 

## DEPLOYMENT:
This site was deployed to Github pages.

  The steps to deploy are :

1. In the github repository, click the settings tab
2. From the source section drop down menu select the main branch
3. Once the main branch has been selected the page will automatically refresh with a detailed ribbon display indicating the successful deployment.
https://rachel-o-donnell.github.io/Mythology-Quiz/

To Clone this repository follow these steps:

1. On GitHub.com, click into the main page of the repository.
2. Above the list of files, click the drop down Code button
3. Copy the URL for the repository. 
    * To clone the repository using HTTPS, under "HTTPS", click . 
    * To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click . 
    * To clone a repository using GitHub CLI, click GitHub CLI, then click .
4. Open Terminal.
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL you copied earlier.
    * $ git clone https://rachel-o-donnell.github.io/Mythology-Quiz/
7. Press Enter to create your local clone.

--- 

## FUTURE FEATURES:

* More questions 
* More images 
* Difference in scoring depending on level
* Highscores page
* Your high scores 
* Rules page
* Sound effects
* Option to turn off showing correct answer
* Insert message if correct or wrong
* Hints
* Option to mix levels 
* Keep next button in a constant place for better player experience.
* Option not to be able to use next button unless answr has been given.
* Bonus points for correctly guessing the name of the displayed picture
* Connect to API to expand to to related subjects like art history
    * Initially I wanted my quiz to be about the Celtic Calendar but after learning about API I needed to change my subject and design to practice using this. I made a serious effort to connect and interact fully with the API but I was stumped on how to populate my answers buttons so I copied and pasted the questions into a new JS file so I could continue.


---

## CREDITS:

**Code:**

Using Love Running and my last project
https://rachel-o-donnell.github.io/craft-and-cocktail-club/
https://github.com/rachel-o-donnell/craft-and-cocktail-club
 as guidlines to rememeber Html and CSS and Love Maths as a guide for JS and adapting all to my needs and design for this project. 

Heavily relying on Dev Tooos to play around and find the right fit.

* LOVE MATHS 
    * code for increasing score and questioncount.
    
* https://miker94.github.io/CI-Project-Portfolio-2/ 
    * I absolutely loved the style and design of this quiz I found on the peer review channel. I've been looking a lot at Mike's code to see how he created it in many sections but changing as much as possible to suit my needs and simplify it. Mostly I am using the idea of the game screen with all the info centered. 

Used how to add background image directly- I couldnt find a way to add and style differently that would work. I changed mine only by adding it to the body element and not the html ????? DID I CHANGE THIS BACK ????. 
 

 **Tutorials**:
 All videos watched about building quizes with JS:

 * USING FETCH API :  Used a combo of both below videos to fetch api, set questions, difficulty. etc.
      * Web Dev simplified: https://www.youtube.com/watch?v=cuEtnrL9-H0 
      * Code with Ania Dubów: https://www.youtube.com/watch?v=zgHim4ZDpZY: - using array to fetch difficulty setting and set question
 
*  Web Dev Simplified: https://www.youtube.com/watch?v=riDzcEQbX6k
    * Box shadow detail, 
    * Hideing game screen 

* Mike Dane: https://www.youtube.com/watch?v=LQGTb112N_c

* Bro Code: https://www.youtube.com/watch?v=w9GNyw8AvlM 
    * help with code for connecting username on begin game button. 


* Defeated Dotterel: https://www.codegrepper.com/code-examples/javascript/javascript+event+listener+on+select+option
    * Adding and event listener to the html dropdown: Changed to suit my wants
 
 * https://bobbyhadz.com/blog/javascript-cannot-read-property-add-of-undefined 
    *  could not get my classList.add to work realsied I needed to use a for loop. This helped. 

* Answer from jagmitg: .https://stackoverflow.com/questions/25708569/font-awesome-icons-in-html-form 
    * separating the font awesome icon so it still displays with the new text input of username..

* Dropdown code: 
    * https://www.w3schools.com/howto/howto_js_dropdown.asp
        * made a good effort to work with this at the start but found it a little too complicated to interact with whien adding event listeners so resorted to HTML but earlier commits used this.

* HTML dropdown: 
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_value

* Editing a commit message after being pushed
https://www.educative.io/answers/how-to-change-a-git-commit-message-after-a-push

* Disabling elements: 
https://alvarotrigo.com/blog/disable-button-javascript/#:~:text=To%20disable%20a%20button%20using,disabled%20JavaScript%20property%20to%20false%20.

* Disabling hover function
    * Bert Verhelst comment: https://www.quora.com/How-to-unhover-an-element-with-an-active-hover-with-JS

* Fisher Yates shuffle code suggested ny Sean Young on slack as I had otriginally applied the math.random.  Took a few attempts to understand and how to apply to my needs

* Disabling pointer - pointer-events: none/auto were not working: 
    * Mohamed Ramrami: https://stackoverflow.com/questions/50349017/how-can-i-change-cursor-for-disabled-button-or-a-in-bootstrap-4

**Images**

**Background image**
* Chamber of the Giants by Giulio Romano taken from
  https://www.atlasobscura.com/places/chamber-of-the-giants
 https://artsandculture.google.com/asset/chamber-of-the-giants-giulio-romano/kwH6-YlTRSD9fA?ms=%7B%22x%22%3A0.5%2C%22y%22%3A0.5%2C%22z%22%3A9.70138


* The Birth of Venus by Botticelli (1486). Photograph: Alamy taken from
  https://www.theguardian.com/artanddesign/2016/mar/05/destination-venus-how-botticelli-became-a-brand

* “Perseus and Andromeda” by Frederic Leighton taken from
   https://joyofmuseums.com/artists-index/frederic-leighton/perseus-and-andromeda-by-frederic-leighton/

* "Oedipus and the Sphinx" by Gustave Moreau taken from
   https://www.widewalls.ch/magazine/greek-mythology-paintings/gustave-moreau-oedipus-and-the-sphinx

 **Questions:**
Used and API to use pre done questions and answers - https://opentdb.com/api_config.php

**Markdown:**

Format learnings from below
https://www.youtube.com/watch?v=HUBNt18RFbo
https://www.markdownguide.org/cheat-sheet/

**Media query:**

Ideas from here- using rem/em
https://www.youtube.com/watch?v=IsC5-C_nuF4
https://www.w3schools.com/tags/ref_pxtoemconversion.asp - px converter - converting standard screen px sizes to ems.

*Saving and optimizing images for SEO: https://www.jimdo.com/blog/optimize-website-images-for-better-design-seo/


**Fonts:**

Google fonts

**Icons:**

Font Awesome

**Wireframes:**

Balsamiq

---

## BUGS FIXED:

* .dropdown background color changed when I added a margin bottom to the button element. Added new background color.
    Only had a  margin left 15px to h2 so it stuck too far to the right when on a smaller screen (320px) changed to margin 0 10px to be more balanced. 

* Game panel was pushed down so there was a space on top no matter how many hides I addded.
    Removed justify-content on name-area (need to add listener) then styled.

* Font awesome icon missing when you input username - Had to take it out of the text area

* Redesign username to initials instead as a name pushed the game panel to be too crowded on a mobile device. 

* Surrounded icon and their texgt partners in game panel with containers to style side by side but still separated out on the screen. 

* Could not make home container disappear by adding any of the hide classes I had previously made. 
    From playing in dev tools I knew adding display:none worked so I found the correct syntax at https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/ (homeContainer.style.display = 'none')

* Game kept getting reset to home when answer button was pressed
    Changed form to section and that fixed the problem thanks to Sean Young's help on Slack!

* Game screens not displaying because they had been set to flex in style.css.
     I made JS add display style to only bring up the containers with    display flex when they were called by a function like- begin and endgame. 

* Fix bug of not displaying the next question
    Needed to increase currentquestion index in next button call and declare the variable outside of the choose next question function

* fa-solid was at 0 5px 10px so would not manipulate with margin- right (I renamed them panel-elements)

* Fix bug of other category image showing up on 2nd round - needed to add hides 

* On playin 2nd game in a row after using the play again button, game would stop working when the questions ran out.
     I needed to hook up a new function of reloading the game to its original state to clear the questions. Default was selected in dropdown so people can change category. Used w3 schools to default selected and get reload code.

* Required elements on home screen - initials input and dropdown required was not being recognised because I had event listeners attached in js. 
    So had to access this feature through JS. Had to change the event listener to run the game only when the name and select areas were filled. 

## BUG TO BE FIXED.
* Major overhaul of html structure -
     Trying to get panel to separate and run on the same line but after fixing home icon by adding the display flex the user icon still runs lower than the others . I think this is becasue they are different sizes. Tried flex end but that doesnt move it and when I apply that to the others they move way too low. 

## RESOURCES USED:

* Stack Overflow
* Google
* W3 Schools
* Mdn web docs
* Youtube
* Devtools
* Flex froggy
* Grid Garden
* Open Trivia Database 
* Quora
* Unicorn revealer.
---

![This is an image](/assets/images/read-me-images/venus-responsive.png)