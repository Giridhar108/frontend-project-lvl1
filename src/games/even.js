import startGame from '../index.js';
import randomizer from '../../utils/randomizer.js';

const maxNumbers = 108;

export const getQuestion = (max = maxNumbers) => randomizer(max);

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const ifAnswers = (number, answer) => {
  const result = {};

  if (answer === (number % 2 === 0 ? 'yes' : 'no')) {
    result.bool = true;
    result.answer = 'yes';
    return result;
  }
  result.bool = false;
  result.answer = 'no';

  return result;
};

export default () => startGame(getQuestion, ifAnswers, description);
