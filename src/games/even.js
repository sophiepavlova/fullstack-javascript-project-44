/* eslint-disable prettier/prettier */
import {
  getName,
  getRandomNumber,
  giveTask,
  guessIsEven,
  wrongGuessMessage,
  successMessage,
  getCount,
  incrementCount,
  setCount,
  gameOver,
} from '../index.js';

function startEvenGame() {
  let even = true;
  let guessNumberIsEven;

  getName();
  giveTask('Answer "yes" if the number is even, otherwise answer "no".');

  function isGuessCorrect(rand) {
    even = rand % 2 === 0;
    if (guessNumberIsEven === 'yes' && even === false) {
      wrongGuessMessage(guessNumberIsEven, `Correct answer was 'no'.`);
      gameOver();
    } else if (guessNumberIsEven === 'no' && even === true) {
      wrongGuessMessage(guessNumberIsEven, `Correct answer was 'yes'.`);
      gameOver();
    } else if (guessNumberIsEven !== 'yes' && guessNumberIsEven !== 'no') {
      wrongGuessMessage(guessNumberIsEven, '');
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
    guessNumberIsEven = guessIsEven(randNumber);
    isGuessCorrect(randNumber);
  }
  setCount(0);
}

export default startEvenGame;
