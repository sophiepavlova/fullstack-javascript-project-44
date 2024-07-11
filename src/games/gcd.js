import readlineSync from 'readline-sync';
import {
  getName,
  giveTask,
  getRandomNumber,
  successMessage,
  wrongGuessMessage,
  incrementCount,
  setCount,
  getCount,
  gameOver,
} from '../index.js';

function startGcdGame() {
  let number1;
  let number2;
  let biggerNumber;
  let smallerNumber;

  let userGcdResult;
  let correctGcdResult;

  getName();
  giveTask('Find the greatest common divisor of given numbers.');

  function getBiggerNumber() {
    number1 = getRandomNumber();
    number2 = getRandomNumber();
    if (number1 >= number2) {
      biggerNumber = number1;
      smallerNumber = number2;
    } else {
      biggerNumber = number2;
      smallerNumber = number1;
    }
    // console.log(biggerNumber, smallerNumber);
  }

  function getCorrectGcd() {
    // Алгоритм Евклида
    getBiggerNumber();
    let ostatok;
    let a = biggerNumber; // делитель
    let b = smallerNumber; // делимое

    while (b !== 0) {
      ostatok = a % b;
      a = b;
      b = ostatok;
    }
    correctGcdResult = a;
    console.log(correctGcdResult); // for testing, so not to calculate by yourself
  }

  function calculateGcdTask() {
    console.log(`Question: ${number1} ${number2}`);
    userGcdResult = Number(readlineSync.question('Your answer: '));
    return userGcdResult;
  }

  function isCalsCorrect() {
    getCount();
    if (userGcdResult === correctGcdResult) {
      incrementCount();
      console.log('Correct!');
      if (getCount() === 3) {
        successMessage();
      }
    } else {
      wrongGuessMessage(
        userGcdResult,
        `Correct answer was '${correctGcdResult}'.`,
      );
      gameOver();
    }
  }
  while (getCount() < 3) {
    getCorrectGcd();
    calculateGcdTask();
    isCalsCorrect();
  }

  setCount(0);
}

export default startGcdGame;
