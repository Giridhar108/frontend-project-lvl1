import startGame from '../index.js';
import genRandom from '../utils.js';

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
const maxLength = 8;
const maxStep = 8;
const minPosition = 2;
const minLength = 5;

const getQuestionAndAnswer = () => {
  const firstNumber = genRandom(0, maxNumber);
  const step = genRandom(1, maxStep);
  const length = genRandom(minLength, maxLength);
  const indexHidenElement = genRandom(minPosition, length - 1);

  const progression = genProgression(firstNumber, step, length);
  const rightAnswer = progression[indexHidenElement].toString();
  progression[indexHidenElement] = '..';
  const question = progression.join(' ');
  return { question, rightAnswer };
};

const description = 'What number is missing in the progression?';

export default () => startGame(getQuestionAndAnswer, description);
