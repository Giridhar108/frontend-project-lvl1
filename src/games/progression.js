import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const getProgression = (startNumber, step, length) => {
  const progression = [startNumber];
  let constanta = step;
  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + constanta);
    constanta += step;
  }
  return progression;
};

const maxNumber = 10;
const stepAndLengthNumbers = 8;
const minStep = 2;
const minLength = 5;
const minPosition = 3;

const getQuestionAndAnswer = () => {
  const container = {};
  const firstNumberProgression = genRandom(0, maxNumber);
  const stepProgression = genRandom(0, stepAndLengthNumbers) + minStep;
  const length = genRandom(0, stepAndLengthNumbers) + minLength;
  const varyablePosition = genRandom(minPosition, length);

  const result = getProgression(firstNumberProgression, stepProgression, length);
  container.answerFromGame = result[varyablePosition].toString();
  result[varyablePosition] = '..';
  container.question = result.join(' ');
  return container;
};

const description = 'What number is missing in the progression?';

export default () => startGame(getQuestionAndAnswer, description);
