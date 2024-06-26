#!/usr/bin/env node
// const readlineSync = require("readline-sync");
/* eslint-disable prettier/prettier */
import readlineSync from 'readline-sync';

let randNumber;
let even = true;
let count = 0;
let userName;
let guessNumberIsEven;

console.log('Welcome to the Brain Games!');

const getName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

getName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

function getRandomNumber(min = 1, max = 100) {
  randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  even = randNumber % 2 === 0;
  //   console.log(even);
  return randNumber;
}

function guessIsEven() {
  console.log(`Question: ${randNumber}`);
  guessNumberIsEven = readlineSync.question('Your answer:');
  //   const isEven = guessNumberIsEven === 'yes';
  //   console.log(isEven);
  return guessNumberIsEven;
}

function isGuessCorrect() {
  if (guessNumberIsEven === 'yes' && even === false) {
    count = 0;
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${userName}!`);
  } else if (guessNumberIsEven === 'no' && even === true) {
    count = 0;
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${userName}!`);
  } else if (guessNumberIsEven !== 'yes' && guessNumberIsEven !== 'no') {
    count = 0;
    console.log(`${guessNumberIsEven} is wrong answer ;(.`);
    console.log(`Let's try again, ${userName}!`);
  } else {
    count += 1;
    // console.log(count);
    console.log('Correct!');
  }
}
while (count < 3) {
  getRandomNumber();
  guessIsEven();
  isGuessCorrect();
}

console.log(`Congratulations, ${userName}!`);
