import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randNum = getRandomInRange();
  const answer = isEven(randNum) ? 'yes' : 'no';
  const question = randNum;
  return [question, answer];
};

export default () => {
  const description =
    'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, generateRound);
};
