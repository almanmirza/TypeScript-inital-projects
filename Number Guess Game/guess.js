"use strict";
// numberGuessingGame.ts
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create an interface for reading input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Function to get a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to start the guessing game
function startGame() {
    var secretNumber = getRandomNumber(1, 20);
    console.log("Welcome to the Number Guessing Game!");
    console.log("I have selected a number between 1 and 20.");
    console.log("Can you guess it?");
    var askGuess = function () {
        rl.question("Enter your guess: ", function (input) {
            var guess = parseInt(input, 10);
            if (isNaN(guess)) {
                console.log("Please enter a valid number.");
            }
            else if (guess < secretNumber) {
                console.log("Too low! Try again.");
            }
            else if (guess > secretNumber) {
                console.log("Too high! Try again.");
            }
            else {
                console.log("Congratulations! You guessed the number ".concat(secretNumber, "."));
                rl.close();
                return;
            }
            askGuess();
        });
    };
    askGuess();
}
// Start the game
startGame();
