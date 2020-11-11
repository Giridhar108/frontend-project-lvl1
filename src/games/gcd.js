import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const findGcd = (number1, number2) => {
  if (number2) { return findGcd(number2, number1 % number2); }
  return number1;
};

const getQuestionAndAnswer = () => {
  const number1 = genRandom();
  const number2 = genRandom();
  const question = `${number1} ${number2}`;

  const rightAnswer = findGcd(number1, number2).toString();

  return { question, rightAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame(getQuestionAndAnswer, description);
