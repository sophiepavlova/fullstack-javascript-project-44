/* eslint-disable prettier/prettier */
import {
  getName,
  getRandomNumber,
  giveTask,
  guess,
  wrongGuessMessage,
  successMessage,
  getCount,
  incrementCount,
  setCount,
  gameOver,
} from '../index.js';

function startEvenGame() {
  let even = true;
  let guessIsTrue;

  getName();
  giveTask('Answer "yes" if the number is even, otherwise answer "no".');

  function isGuessCorrect(rand) {
    even = rand % 2 === 0;
    if (guessIsTrue === 'yes' && even === false) {
      wrongGuessMessage(guessIsTrue, `Correct answer was 'no'.`);
      gameOver();
    } else if (guessIsTrue === 'no' && even === true) {
      wrongGuessMessage(guessIsTrue, `Correct answer was 'yes'.`);
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
    const randNumber = getRandomNumber();
    guessIsTrue = guess(randNumber);
    isGuessCorrect(randNumber);
  }
  setCount(0);
}

export default startEvenGame;
