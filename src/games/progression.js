/* eslint-disable prettier/prettier */
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

function startProgressionGame() {
  let userResult;
  let numberToGuess;
  const progressionLength = 10;
  const progressionArr = [];
  let progressionArrDots = [];
  let progressionString;

  getName();
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

  function guessNumberInProgression() {
    console.log(`Question: ${progressionString} `);
    userResult = Number(readlineSync.question('Your answer: '));
    return userResult;
  }
  while (getCount() < 3) {
    generateProgression();
    guessNumberInProgression();
    isGuessCorrect();
  }

  setCount(0);
}
export default startProgressionGame;
