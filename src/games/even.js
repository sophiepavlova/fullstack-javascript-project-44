import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}
const generateRound = () => {
  const randNum = getRandomInRange();
  const answer = isEven(randNum);
  const question = randNum;
  return [question, answer];
};

export default () => {
  const description =
    'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, generateRound);
};
