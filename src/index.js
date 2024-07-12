import readlineSync from 'readline-sync';

let count = 0;
let guessIsTrue;
let userName;
const signs = ['+', '-', '*'];
let userResult;

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export function getRandomNumber(min = 1, max = 100) {
  const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //   even = randNumber % 2 === 0;
  return randNumber;
}

export function getRandomSign() {
  const randIndex = Math.floor(Math.random() * signs.length);
  const randSign = signs[randIndex];
  return randSign;
}

export function resetCount() {
  count = 3;
}
export function incrementCount() {
  count += 1;
}
export function setCount(newCount) {
  count = newCount;
}
export function getCount() {
  return count;
}

export function wrongGuessMessage(guess, repl) {
  console.log(`'${guess}' is wrong answer ;(. ${repl} `);
}

export function tryAgainMessage() {
  console.log(`Let's try again, ${userName}!`);
}
export function gameOver() {
  tryAgainMessage();
  resetCount();
}

export function successMessage() {
  console.log(`Congratulations, ${userName}!`);
}

export function giveTask(task) {
  console.log(task);
}
export function makeGuess(randNumber) {
  console.log(`Question: ${randNumber}`);
  guessIsTrue = readlineSync.question('Your answer: ');
  return guessIsTrue;
}

export function getUserResult(...data) {
  // Join data with a space if there are multiple arguments
  const question = data.join(' ');
  console.log(`Question: ${question}`);
  userResult = Number(readlineSync.question('Your answer: '));
  return userResult;
}
