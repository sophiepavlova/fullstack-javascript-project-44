/* eslint-disable prettier/prettier */
import readlineSync from 'readline-sync';
import {
  getName,
  giveTask,
  getRandomNumber,
  getRandomSign,
  successMessage,
  wrongGuessMessage,
  incrementCount,
  setCount,
  getCount,
  gameOver,
} from '../index.js';

function startCalcGame() {
  let randExpression;
  let expressionResult;
  let userCalculationResult;

  getName();
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

  function calculateExpression() {
    console.log(`Question: ${randExpression}`);
    userCalculationResult = Number(readlineSync.question('Your answer: '));
    return userCalculationResult;
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
    userCalculationResult = calculateExpression(randExpression);
    calcIsCorrect(userCalculationResult);
  }
  setCount(0);
}
export default startCalcGame;
