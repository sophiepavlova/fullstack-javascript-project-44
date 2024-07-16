import {
  makeWelcome,
  giveTask,
  successMessage,
  wrongGuessMessage,
  incrementCount,
  setCount,
  getCount,
  gameOver,
  makeGuess,
} from '../index.js';

import getRandomNumber from '../utils.js';

function startPrimeGame() {
  const primeNumbers = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];
  let generatedNumber;
  let correctAnswer;
  let guessIsTrue;

  makeWelcome();
  giveTask('Answer "yes" if given number is prime. Otherwise answer "no".');

  function getCorrectAnswer() {
    if (primeNumbers.includes(generatedNumber)) {
      correctAnswer = true;
    } else {
      correctAnswer = false;
    }

    return correctAnswer;
  }
  function isGuessCorrect() {
    // even = rand % 2 === 0;
    if (guessIsTrue === 'yes' && correctAnswer === false) {
      wrongGuessMessage(guessIsTrue, "Correct answer was 'no'.");
      gameOver();
    } else if (guessIsTrue === 'no' && correctAnswer === true) {
      wrongGuessMessage(guessIsTrue, "Correct answer was 'yes'.");
      gameOver();
    } else if (guessIsTrue !== 'yes' && guessIsTrue !== 'no') {
      wrongGuessMessage(guessIsTrue, '');
      gameOver();
    } else {
      incrementCount();
      console.log('Correct!');
      if (getCount() === 3) {
        successMessage();
      }
    }
  }

  while (getCount() < 3) {
    generatedNumber = getRandomNumber(1, 101);
    guessIsTrue = makeGuess(generatedNumber);
    getCorrectAnswer();
    isGuessCorrect(guessIsTrue);
  }
  setCount(0);
}
export default startPrimeGame;
