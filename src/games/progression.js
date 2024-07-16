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

function startProgressionGame() {
  let userResult;
  let numberToGuess;
  const progressionLength = 10;
  const progressionArr = [];
  let progressionArrDots = [];
  let progressionString;

  makeWelcome();
  giveTask('What number is missing in the progression?');

  function generateProgression() {
    const firstNumberInProgression = getRandomNumber(1, 15);
    const progressionIncrement = getRandomNumber(1, 20);
    const progressionHiddenIndex = getRandomNumber(0, 9);
    console.log(progressionIncrement);
    progressionArr[0] = firstNumberInProgression;

    for (let i = 1; i < progressionLength; i += 1) {
      progressionArr[i] = progressionArr[i - 1] + progressionIncrement;
    }
    numberToGuess = progressionArr[progressionHiddenIndex];
    progressionArrDots = progressionArr.slice();
    progressionArrDots[progressionHiddenIndex] = '..';
    progressionString = progressionArrDots.join(' ');
  }

  function isGuessCorrect() {
    getCount();
    if (userResult === numberToGuess) {
      incrementCount();
      console.log('Correct!');
      if (getCount() === 3) {
        successMessage();
      }
    } else {
      wrongGuessMessage(userResult, `Correct answer was '${numberToGuess}'.`);
      gameOver();
    }
  }

  while (getCount() < 3) {
    generateProgression();
    userResult = getUserResult(progressionString);
    isGuessCorrect();
  }

  setCount(0);
}
export default startProgressionGame;
