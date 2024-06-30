// numberGuessingGame.ts

import * as readline from "readline";

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get a random number between min and max (inclusive)
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the guessing game
function startGame(): void {
  const secretNumber = getRandomNumber(1, 20);
  console.log("Welcome to the Number Guessing Game!");
  console.log("I have selected a number between 1 and 20.");
  console.log("Can you guess it?");

  const askGuess = () => {
    rl.question("Enter your guess: ", (input) => {
      const guess = parseInt(input, 10);
      if (isNaN(guess)) {
        console.log("Please enter a valid number.");
      } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
      } else if (guess > secretNumber) {
        console.log("Too high! Try again.");
      } else {
        console.log(`Congratulations! You guessed the number ${secretNumber}.`);
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
