import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101,
];

function isPrime(num) {
  return primeNumbers.includes(num) ? 'yes' : 'no';
}

const generateRound = () => {
  const randNum = getRandomInRange();

  const question = `${randNum}`;
  const answer = isPrime(randNum);

  return [question, answer];
};

export default () => {
  const description =
    'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(description, generateRound);
};
