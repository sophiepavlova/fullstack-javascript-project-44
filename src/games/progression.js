import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const startProgression = getRandomInRange(1, 15);
  const stepOfProgression = getRandomInRange(1, 20);
  const length = 10;
  const progression = generateProgression(
    startProgression,
    stepOfProgression,
    length,
  );
  const progressionHiddenIndex = getRandomInRange(0, length - 1);
  const numberToGuess = progression[progressionHiddenIndex];
  const progressionDots = progression.slice();
  progressionDots[progressionHiddenIndex] = '..';
  const question = progressionDots.join(' ');
  const answer = String(numberToGuess);

  return [question, answer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  runEngine(description, generateRound);
};
