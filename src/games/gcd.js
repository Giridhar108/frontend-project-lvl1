import startGame from '../index.js';
import randomizer from '../../utils/randomizer.js';

const maxNumber = 108;
export const getQuestion = (max = maxNumber) => {
  const firstNumber = randomizer(max);
  const secondNumber = randomizer(max);
  return `${firstNumber} ${secondNumber}`;
};

export const description = 'Find the greatest common divisor of given numbers.';

export const ifAnswers = (numbers, answer) => {
  const arrayNumbers = numbers.toString().split(' ');
  const one = +arrayNumbers.pop();
  const two = +arrayNumbers.pop();
  const result = {};

  function mygcd(oneV, twoZ) {
    if (twoZ) { return mygcd(twoZ, oneV % twoZ); }
    return oneV;
  }

  result.answer = mygcd(one, two).toString();
  if (result.answer === answer) {
    result.bool = (true);
  } if (result.answer !== answer) {
    result.bool = (false);
  }
  return result;
};

export default () => startGame(getQuestion, ifAnswers, description);
