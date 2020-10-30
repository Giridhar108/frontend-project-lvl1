import startGame from '../index.js';
import randomizer from '../../utils/randomizer.js';

const maxNumber = 10;
const stepAndLengthNumbers = 8;
const minStep = 2;
const minLength = 5;

export const getQuestion = (max = maxNumber) => {
  const arr = [];
  const firstNumberArr = randomizer(max);
  const stepArray = randomizer(stepAndLengthNumbers) + minStep;
  const length = randomizer(stepAndLengthNumbers) + minLength;

  while (arr.length <= length) {
    arr.push(firstNumberArr);
  }
  const prog = (array, y) => {
    let step = y;
    const forEslintArray = array;
    for (let i = 0; i < array.length; i += 1) {
      forEslintArray[i] += step;
      step += y;
    }
    return forEslintArray;
  };

  const result = prog(arr, stepArray);
  const variableLength = result[length - 3];
  return result.join(' ').replace(variableLength, '..');
};

export const description = 'What number is missing in the progression?';

export const ifAnswers = (n, answer) => {
  const arr = n.split(' ');
  const result = {};
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '..') {
      arr[i] = (+arr[i - 1] - +arr[i - 2]) + +arr[i - 1];
      res = arr[i];
    }
  }
  result.answer = res.toString();

  if (result.answer === answer) {
    result.bool = (true);
  } if (result.answer !== answer) {
    result.bool = (false);
  }
  return result;
};

export default () => startGame(getQuestion, ifAnswers, description);
