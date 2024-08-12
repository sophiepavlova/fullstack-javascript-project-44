import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

function generateProgression() {
  const progressionLength = 10;
  const progressionArr = [];

  const firstNumberInProgression = getRandomInRange(1, 15);
  const progressionIncrement = getRandomInRange(1, 20);
  const progressionHiddenIndex = getRandomInRange(0, 9);
  console.log(progressionIncrement);

  progressionArr[0] = firstNumberInProgression;

  for (let i = 1; i < progressionLength; i += 1) {
    progressionArr[i] = progressionArr[i - 1] + progressionIncrement;
  }
  const numberToGuess = progressionArr[progressionHiddenIndex];
  const progressionArrDots = progressionArr.slice();
  progressionArrDots[progressionHiddenIndex] = '..';
  const progressionString = progressionArrDots.join(' ');

  return {
    question: progressionString,
    answer: String(numberToGuess),
  };
}

const generateRound = () => {
  const { question, answer } = generateProgression();
  console.log(answer);

  return [question, answer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  runEngine(description, generateRound);
};
