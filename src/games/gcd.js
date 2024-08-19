import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

function getCorrectGcd(number1, number2) {
  // Алгоритм Евклида
  let ostatok;
  let a = Math.max(number1, number2); // делитель
  let b = Math.min(number1, number2); // делимое

  while (b !== 0) {
    ostatok = a % b;
    a = b;
    b = ostatok;
  }
  const correctGcdResult = a;
  return correctGcdResult;
}

const generateRound = () => {
  const number1 = getRandomInRange();
  const number2 = getRandomInRange();
  const question = `${number1} ${number2}`;
  const answer = String(getCorrectGcd(number1, number2));

  return [question, answer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runEngine(description, generateRound);
};
