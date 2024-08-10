import {
  giveTask,
  getRandomSign,
  successMessage,
  wrongGuessMessage,
  incrementCount,
  setCount,
  getCount,
  gameOver,
  getUserResult,
  startGame,
} from '../index.js';

import getRandomNumber from '../utils.js';

function startCalcGame() {
  let randExpression;
  let expressionResult;
  let userCalculationResult;

  startGame();
  giveTask('What is the result of the expression?');

  function getRandomExpression() {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const sign = getRandomSign();

    switch (sign) {
      case '+':
        expressionResult = a + b;
        break;
      case '-':
        expressionResult = a - b;
        break;
      case '*':
        expressionResult = a * b;
        break;
      default:
        expressionResult = 'undefined';
    }

    // console.log(expressionResult);

    randExpression = `${a} ${sign} ${b}`;
    return randExpression;
  }

  function calcIsCorrect() {
    // console.log(userCalculationResult);
    // console.log(expressionResult);
    if (userCalculationResult !== expressionResult) {
      gameOver();
      wrongGuessMessage(
        userCalculationResult,
        `Correct answer was '${expressionResult}'.`,
      );
    } else {
      incrementCount();
      console.log('Correct!');
      if (getCount() === 3) {
        successMessage();
      }
    }
  }

  while (getCount() < 3) {
    randExpression = getRandomExpression();
    userCalculationResult = getUserResult(randExpression);
    calcIsCorrect(userCalculationResult);
  }
  setCount(0);
}
export default startCalcGame;
