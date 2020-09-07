/*
Random Number Guessing Game - CPU vs. CPU
Step 1: Generate random number
Step 2: While loop where computer guesses the number
Step 3: If guess is correct, print the random number and the number of guesses
*/

let upper = 10000;
let randomNumber = getRandomNumber(upper);
let compGuesses = 0;
let compGuess = getRandomNumber(upper);

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}




while (compGuess !== randomNumber) {
  compGuesses +=1;
  compGuess = getRandomNumber(upper);
}
document.write(`The random number was ${randomNumber} and the computer took ${compGuesses} tries to guess it.`);
