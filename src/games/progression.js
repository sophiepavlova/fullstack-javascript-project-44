import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (
  start = getRandomInRange(1, 15),
  step = getRandomInRange(1, 20),
  length = 10,
) => {
  const progression = [];

  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }
  const progressionHiddenIndex = getRandomInRange(0, length - 1);
  const numberToGuess = progression[progressionHiddenIndex];
  const progressionDots = progression.slice();
  progressionDots[progressionHiddenIndex] = '..';
  const progressionString = progressionDots.join(' ');

  return {
    question: progressionString,
    answer: String(numberToGuess),
  };
};

const generateRound = () => {
  const { question, answer } = generateProgression();
  console.log(answer);

  return [question, answer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  runEngine(description, generateRound);
};
