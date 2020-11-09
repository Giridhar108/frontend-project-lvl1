import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const findGcd = (number1, number2) => {
  if (number2) { return findGcd(number2, number1 % number2); }
  return number1;
};

const getQuestionAndAnswer = () => {
  const container = {};
  const firstNumber = genRandom();
  const secondNumber = genRandom();
  container.question = `${firstNumber} ${secondNumber}`;

  container.answerFromGame = findGcd(firstNumber, secondNumber).toString();

  return container;
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame(getQuestionAndAnswer, description);
