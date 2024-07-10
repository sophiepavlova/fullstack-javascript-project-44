/* eslint-disable prettier/prettier */
import readlineSync from 'readline-sync';

let count = 0;
let guessIsTrue;
let userName;
const signs = ['+', '-', '*'];

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
export function guess(randNumber) {
  console.log(`Question: ${randNumber}`);
  guessIsTrue = readlineSync.question('Your answer: ');
  return guessIsTrue;
}

// export function isGuessCorrect(rand) {
//   even = rand % 2 === 0;
//   if (guessIsTrue === 'yes' && even === false) {
//     wrongGuessMessage(guessIsTrue, `Correct answer was 'no'.`);
//     gameOver();
//   } else if (guessIsTrue === 'no' && even === true) {
//     wrongGuessMessage(guessIsTrue, `Correct answer was 'yes'.`);
//     gameOver();
//   } else if (guessIsTrue !== 'yes' && guessIsTrue !== 'no') {
//     wrongGuessMessage(guessIsTrue, '');
//     gameOver();
//   } else {
//     incrementCount();
//     console.log('Correct!');
//     if (getCount() === 3) {
//       successMessage();
//     }
//   }
// }

