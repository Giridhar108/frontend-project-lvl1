import startGame from '../index.js';
import randomizer from '../../utils/randomizer.js';

const numberOfPrimes = 19;
const maxNumberRandom = 107;
const variable = 2;
export const getCondition = (max = numberOfPrimes) => {
  const chosePrime = randomizer(max);
  const variableBetweenPrimeNotPrime = randomizer(variable);
  const maxNumber = randomizer(maxNumberRandom) + 1;
  const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
  if (variableBetweenPrimeNotPrime === 0) {
    return maxNumber;
  }
  return numbers[chosePrime];
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const ifAnswers = (num, answer) => {
  const result = {};
  if (num < 2) {
    result.answer = 'no';
  }
  if (num === 2) {
    result.answer = 'yes';
  }
  const numSqrt = Math.sqrt(num) + 1;

  for (let i = 2; i < numSqrt; i += 1) {
    if (num % i === 0) {
      result.answer = 'no';
    }
  }
  result.answer = 'yes';

  if (result.answer === answer) {
    result.bool = (true);
  } if (result.answer !== answer) {
    result.bool = (false);
  }
  return result;
};

export default () => startGame(getCondition, ifAnswers, description);
