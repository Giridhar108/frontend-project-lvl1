import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';
import isGcd from '../utils/isGcd.js';

const getQuestionAndAnswer = () => {
  const container = {};
  const firstNumber = genRandom();
  const secondNumber = genRandom();
  container.question = `${firstNumber} ${secondNumber}`;

  container.answerFromGame = isGcd(firstNumber, secondNumber).toString();

  return container;
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame(getQuestionAndAnswer, description);
