# WELCOME TO THE MYTHOLOGY QUIZ 

A multiple choice quiz for lovers of Greek mythology set in a sreen with a backdrop of one of the most famous paintings on this theme 

There is 3 difficulty levels to choose from easy, medium and hard. Players can enter their initials 

---

## UX/UI:

**Target Audience:**

Lovers of Greek mythology and art. A multtiple choice method makes it more accessable to different knowledge levels as well as the choice to step up the challenge by choosing different difficulty levels. 

**Site Goals:** 

users can easily navigate the game by use of of simple box displaying all interactive elements. Users can enter their initials coose a level of difficulty and begin the game. On the game screen the player can clearly see icons at the top of the screen with a home button that bring them back to the home screen at any point in the game, a user icon displays their own initials that they entered, an icon if a tropy displays / SUGGESTS??? the score the player is on and lastly that will be displayed on the screen, Users can easily see what question they are on out of 8 . 

each quesion is dispalyed with 4 options for answers, users can control when they see the next question but pressing a next button in case they want to study the answer in the event they chose incorrectly. the button will only fire after they have submitted an answer, and a color change will occur -green for rcorrect red for incorrect. the the player has answered 8 questions an end game screen will appear telling the user, a personalised message with the players name, score and level difficulty. A painting of a mythological significance will be displayed and the olayer has the option to play the game again if they wish.

**User Stories:**

**Colour choice:**

Originally I wanted t have the game based on the Celtic wheel of the year but chose to change and try API . 

Insoired by the color choice of this picture for its calming, wamr and complementary tones. I wanted a color scheeme to feel classic, rich while neutral.

Once I found the background image I knew is would work perfectly to act as a background that would draw the players attention to the centre of the screen with its circular layout while still being an incredible textur compliment to the ochre screen.


**Colours**
added the dark purple font for more acceability while being a complimentary color to the mustard.

stone grey. 

I opted for richer palette for the red and green that would sit within the mustard and not appear garish. They needed to feel like old colors of the time. I used the undertones of ht ebackgrouind image to pull out tones that might suit, ultimately landing on the ones fhosen. 

**Fonts:**

Google Fonts:

Cormorant+Garamond Classic but with a little opulant decoration

![This is an image](/assets/images/fonts.png)

**Imagery:**


## HERO IMAGE

I do not have the rights to these images they are used for educational purposes only.

Hero image:

end of game : 
easy
The Birth of Venus by Botticelli (1486). Photograph: Alamy taken from
https://www.theguardian.com/artanddesign/2016/mar/05/destination-venus-how-botticelli-became-a-brand

medium
“Perseus and Andromeda” by Frederic Leighton taken from
https://joyofmuseums.com/artists-index/frederic-leighton/perseus-and-andromeda-by-frederic-leighton/

hard
"Oedipus and the Sphinx" by Gustave Moreau taken from
https://www.widewalls.ch/magazine/greek-mythology-paintings/gustave-moreau-oedipus-and-the-sphinx

## Wireframes:

Wireframes were made with Balsamiq and can be found here

---

## FEATURES:

background image
**Nav bar:**

**enter initials:**
**Drop down menu:**
**Game Panel :**
**Question :**
**Ansers:**
The Nav bar consists of 3 options, XYZ  allowing the user to easily navigate their journey without using the back button.
Each nav button has an accompanying icon that can be easily read visually.
The active page is underlined confirming to the user what page they are currently on.
It is fully responsive with layout of the nav bar being consistent in style across different screen sizes save for a stacked style for a mobile device.

**Answer buttons:**
**Play again:**

---

## TECHNOLOGIES USED:

Html
Css
Javascript 

---

## TESTING:

Devices tested:

 * Iphone 11
 * Iphone 5
 * MacBook Air
 * Ipad
 * 32" monitor
 * Samsung Galaxy S8
 * Samsung Galaxy Ultra
 * tested in responsive form in Chrome Dev tools.

**Browsers tested:**

 * Firefox
 * Brave
 * Chrome
 * Safari
 * Validator Testing:

HTML: No errors are returned when passing through the official W3C validator.
CSS: No errors are returned when passing through the official Jigsaw validator.
JShint: No errors are returned when passing through the official JShint.
https://beautifier.io/

**Lighthouse**

Mobile Pages:
  
Desktop Pages:

testing game elements :
| FEATURE | EXPEXT | ACTION | RESULT |
| ----- | ------- | ------ | ------ |
| Enter initials area | Input are requires the player to enter their initials before the game gan be played |  Pressed begin button without entering| Player is prompted to enter initials before game can be played|
| Dropdown button | Each button on the dropdown menu works, displays questions ans answers from category chosen and defaults to choose difficulty when game resets | Chose each category, logged the answer sets to the console to check the category | Each button on the dropdown menu works, displays questions ans answers from category chosen and defaults to choose difficulty when game resets|
|Dropdown menu | Player must select a difficulty setting before game can be played | Pressed begin button without choosing a level | layer must select a difficulty setting before game can be played. |s
| Begin button | Begin button will start the game and load the game screen. | Pressed begin button (after submiting initials and difficulty | Begin button will start the game and load the game screen. |
| Home icon   |   Pressing home button brings you to the home screen and resets the game | Clicked home button | Home button resets game and bring to home screen when pressed |
| Username display| Username displays inputted initials from home screen on the right og the user icon | Entered initials into username input | Username displays inputted username on the right of the user icon |
| Score display | Game screen displays a score of zero on the right of the trophy icon and increases by 1 each time the player answers correctly but stays the same if answered incorrectly. | Played the game to the end answering correctly and Incorrectly  | Score begins at zero increases with eachc orrect ans and stays the same when answered incorrectly |
| Question counter | Question counter displays to the right of the ? icon. It begins at 1/8 and increases with each new question until it reaches 8/8 | Played game from start to finish | Question counter displays to the right of the ? icon. It begins at 1/8 and increases with each new question until it reaches 8 | 
| Questions | Questions are not repeated in a game. | Played each level repeatedly. | Questions are not repeated in a game.|
| Anwer Buttons | Player can only select one answer button, and attempts to click will not incur a color change | Click an answer button , then tried to click all other answers.| Can not select more than one answer. Game no longer recocgnises the click or changes the color of the buttons. |
| Correct answer | Correct answer button turns green when selected | Selected the correct answer | Correct answer button turns green when selected |
| Incorrect answer | Incorrect answer button turns red when selected | Selected an incorrect answer | Incorrect answer button turns red when selected |
| Next Button | Next button can only be clicked when an answer is given. | Clicked next button without answering a question| Nothin happens. Next button then works when an answer is given.|
| End Game | Game ends when player has answered 8 questions.| Played game | Game ends when player has answered 8 questions.|
| End screen message | The players initials, score and reminder of what category was played on the end screen. | Played the game multiple times on all levels to the end, with different initials, and different scores. The inputted initials, score and reminder of what category was played on the end screen. 
| Home icon | Game resets when play again button is clicked.| Clicked home button | Game resets when play again button is clicked.|
| End screen picture| A different picture is displayed when you reach the end game screen depending on the category chosen  - Easy: Venus, Medium: Perseus, Hard: Oedipus | Played each game repeatedly until the end screen appears | A different picture is displayed when you reach the end game screen depending on the category chosen - Easy: Venus, Medium: Perseus, Hard: Oedipus|
| Play again button | Resets game to home screen and resets to the default settings allowing the player to choose a new level or a new player can enter their initials without having to clear the last players.  | PLayed game multiple times on  different levels using the play again button. | Resets game to home screen and resets to the default settings. Initial area is clear waiting foe input and dropdown prompts to choose a difficulty. 

--- 

## DEPLOYMENT:
This site was deployed to Github pages.

  The steps to deploy are :

1. In the github repository, click the settings tab
2. From the source section drop down menu select the main branch
3. Once the main branch has been selected the page will automatically refresh with a detailed ribbon display indicating the successful deployment.
***************** ADD LINK HERE

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
    * $ git clone ******************ADD LINK HERE
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
* Insert message of correct or wrong
* Hints
* Option to mix levels 
* Keep next button in a constant place for better player experience.


---

## CREDITS:

**Code:**
Using Love Running and my last project ******INSERT LINK****  as guidlines to rememeber Html and CSS,Love Maths as a guide for JS and adapting all to my needs and design for this project. 
Heavily relying on Dev Tooos to play around and find the right fit.

LOVE MATHS - code for increasing score and questioncount.

https://miker94.github.io/CI-Project-Portfolio-2/ I absolutely loved the style and design of this quiz so Ive been looking a lot at Mike's code to see how he created it but changing as much as possible to suit my needs and simplify it. Mostly I am using the idea of the game screen with all the info centered. Initially I wanted my quiz to be about the Celtic Calendar but after learning about API I needed to change my subject and design. I chose to use an API rather than write all my questions - really just so I could practice on how to use API. 

Used how to add background image directly- I couldnt find a way to add and style differently that would work. I changed mine only by adding it to the body element and not the html ????? DID I CHANGE THIS BACK ????. 
 
 Dropdown code: https://www.w3schools.com/howto/howto_js_dropdown.asp

 all videos watched about building quizes with JS:
 https://www.youtube.com/watch?v=riDzcEQbX6k: Web Dev Simplified
 box shadow detail, 
 hideing game screen 

Adding and event listener to the html dropdown: Changed to suit my wants
https://www.codegrepper.com/code-examples/javascript/javascript+event+listener+on+select+option (Defeated Dotterel)

 USING FETCH API : USe a coombo of both below videos to fetch api, set questions, difficulty. etc.
 https://www.youtube.com/watch?v=cuEtnrL9-H0 Web Dev simplified - to use fetch APi

 https://www.youtube.com/watch?v=zgHim4ZDpZY: Code with Ania Dubów - using array to fetch difficulty setting and set question

https://www.youtube.com/watch?v=LQGTb112N_c: Mike Dane
 Image:
 Otiginally I had a grey background but I had tyed with the idea of adding images. When I changed my idea to a mythology I immediatly knew I would want to add some rich, classical imagaery. 
 Background image taken from google search on mythological fine art paintings. This was perfect as has many mythological characters and as its painted on a ceiling I feel you can get the feeling of looking up into the sky as you anser your questions- spiraling into a void/ its spiral deign hold the game centre nicely no matter what the screen size. I changed my styling to suit the image .  https://artsandculture.google.com/asset/chamber-of-the-giants-giulio-romano/kwH6-YlTRSD9fA?ms=%7B%22x%22%3A0.5%2C%22y%22%3A0.5%2C%22z%22%3A9.70138

 https://bobbyhadz.com/blog/javascript-cannot-read-property-add-of-undefined - could not get my classList.add to work realsied I needed to use a for loop. this helped. 

help with code for inputting usernaem on begin game button. 
https://www.youtube.com/watch?v=w9GNyw8AvlM 
and with separating the font awesome icon so it still deisplays with the new text input of username...https://stackoverflow.com/questions/25708569/font-awesome-icons-in-html-form ans from jagmitg

HTML DROPDOWN MENU: 
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_select_value

MAKING THE NEXT BUTTON STICK IN THE ONE PLACE (FOR BETTER USER EXPERIENCE)
https://stackoverflow.com/questions/30026487/how-to-make-a-button-stay-at-a-bottom-of-a-screen
ans from Nilesh Mahajan then I played in dev tools untill I was happy with the position


 **Questions:**
Used and API to fetch pre done questions and answers - https://opentdb.com/api_config.php

**Markdown:**

format learnings from below
https://www.youtube.com/watch?v=HUBNt18RFbo
https://www.markdownguide.org/cheat-sheet/

**Media query:**

Ideas from here- using rem/em
https://www.youtube.com/watch?v=IsC5-C_nuF4
https://www.w3schools.com/tags/ref_pxtoemconversion.asp - px converter - converting standard screen px sizes to ems.

*Saving and optimizing images for SEO: https://www.jimdo.com/blog/optimize-website-images-for-better-design-seo/

**Hero image**

**Fonts:**

Google fonts

**Icons:**

Font Awesome

**Wireframes:**

Balsamiq

---

## BUGS FIXED:

.dropdown background color changed when I added a margin bottom to the button element. Added new background color.
Only had a  margin left 15px to h2 so it stuck too far to the right when on a smaller screen (320px) changed to margin 0 10px to be more balanced. 

game panel was pushed down so there was a space on top no matter how many hides I addded.
Removed justify-content on name-area (need to add listener) then styled.s

Font awesome icon missing when You input username - Had to take it out of the text area

redesign username to initials instead as a name pushed the game panel to be too crowded on a mobile device. 

surrounded icon and li partners in game panel with containers to style side by side but still separated out n the screen. 

Could not make home ontaner disappear by adding any of the hide classes I had previously made. From playing in dev tools I knew adding display:none worked so I found the correct syntax at https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/ (homeContainer.style.display = 'none')

game kept getting reset to home when answer button was pressed - Changed form to section and that fixed the problem thanks to Sean Young's help on Slack!

game screens not displaying because they had been set to flex i style.css so I made JS add display style to only brin up the containers with display flex when they were called by a function like- begin and endgame. 

Fix bug of not displaying the next question"
needed to inscrease currentquestion index in next button call and declare the variable outside of the choose next question function

fa-solid was at 0 5px 10px so would not manipulate with margin- right (I renamed them panel-elements)

major overhaul of html structure - trying to get panel to separate and run on the same line but after fixing home by adding the display flex the user icon still runs lower than the others . Tried flex end but that doesnt move it and when I apply that to the others they move way too low.
--- !!!!!!!!cone back to this I think

Fix bug of other category image showing up on 2nd round - needed to add hides 

on 2nd game it would stop working when the questions ran out so I needed to hook up a new function of reloading the game to its original state to clear the questions. default was selected in dropdown so people can change category. used w3 schools to default selected and get reload code.

Required elements on home screen - initials input and dropdown rewuired was not being recognised because I had event listeners attached in js. So had to access this feature through JS. Had to change the event listener to run the game only when the name and select areas were filled. 


--- 

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
---
