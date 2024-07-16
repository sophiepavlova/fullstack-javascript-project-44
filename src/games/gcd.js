import {
  makeWelcome,
  giveTask,
  successMessage,
  wrongGuessMessage,
  incrementCount,
  setCount,
  getCount,
  gameOver,
  getUserResult,
} from '../index.js';

import getRandomNumber from '../utils.js';

function startGcdGame() {
  let number1;
  let number2;
  let biggerNumber;
  let smallerNumber;

  let correctGcdResult;
  let userResult;

  makeWelcome();
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

  function isCalsCorrect() {
    getCount();
    if (userResult === correctGcdResult) {
      incrementCount();
      console.log('Correct!');
      if (getCount() === 3) {
        successMessage();
      }
    } else {
      wrongGuessMessage(
        userResult,
        `Correct answer was '${correctGcdResult}'.`,
      );
      gameOver();
    }
  }
  while (getCount() < 3) {
    getCorrectGcd();
    userResult = getUserResult(number1, number2);
    isCalsCorrect();
  }

  setCount(0);
}

export default startGcdGame;
