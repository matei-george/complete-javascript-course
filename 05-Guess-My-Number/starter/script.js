"use strict";
/* TODO
- Study and organize notes
- Practice JS and DOM Manipulation
- Finish game
*/

// Gets the content of an element
// console.log(document.querySelector(".message").textContent);

// // Sets the content to something else
// document.querySelector(".message").textContent = "Correct number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 10;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let currentScore = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);

// Executes game logic whenever check button is active
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (currentScore > 1) {
    if (!guess) {
      document.querySelector(".message").textContent = "No number ⛔";
    } else if (guess === secretNumber) {
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "25rem";
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector(".score").textContent = currentScore;
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    } else if (guess > secretNumber) {
      document.querySelector(".score").textContent = --currentScore;
      document.querySelector(".message").textContent = "Too high.";
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Too low.";
      document.querySelector(".score").textContent = --currentScore;
    }
  } else {
    document.querySelector("body").style.backgroundColor = "#f93943";
    document.querySelector(".message").textContent = "Game Over!";
    document.querySelector(".score").textContent = 0;
  }
});
// Reloads the web page if again button is active
document.querySelector(".again").addEventListener("click", function () {
  location.reload();
});
