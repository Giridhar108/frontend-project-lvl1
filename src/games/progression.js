import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const genProgression = (firstTerm, step, length) => {
  const iter = (currentTerm, acc) => {
    if (acc.length === length) {
      return acc;
    }

    return iter(currentTerm + step, [...acc, currentTerm]);
  };

  return iter(firstTerm, []);
};

const maxNumber = 10;
const stepAndLengthNumber = 8;
const minPosition = 2;
const minlength = 5;

const getQuestionAndAnswer = () => {
  const firstNumber = genRandom(0, maxNumber);
  const step = genRandom(1, stepAndLengthNumber);
  const length = genRandom(minlength, stepAndLengthNumber);
  const hidenElement = genRandom(minPosition, length - 1);

  const progression = genProgression(firstNumber, step, length);
  const rightAnswer = progression[hidenElement].toString();
  progression[hidenElement] = '..';
  const question = progression.join(' ');
  return { question, rightAnswer };
};

const description = 'What number is missing in the progression?';

export default () => startGame(getQuestionAndAnswer, description);
