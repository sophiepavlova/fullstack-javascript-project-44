import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  const userName = makeWelcome();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(
        `'${userAnswer}' is a wrong answer ;(. The correct answer was '${answer}' `,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runEngine;
