import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const maxNumber = 10;
const stepAndLengthNumbers = 8;
const minStep = 2;
const minLength = 5;

const getQuestionAndAnswer = () => {
  const container = {};
  const arr = [];
  const firstNumberArr = genRandom(0, maxNumber);
  const stepArray = genRandom(0, stepAndLengthNumbers) + minStep;
  const length = genRandom(0, stepAndLengthNumbers) + minLength;

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

  container.answer = variableLength.toString();
  container.question = result.join(' ').replace(variableLength, '..');
  return container;
};

const description = 'What number is missing in the progression?';

export default () => startGame(getQuestionAndAnswer, description);
