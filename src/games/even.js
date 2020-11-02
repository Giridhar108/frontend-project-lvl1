import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';
import isEven from '../utils/isEven.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const container = {};
  container.question = genRandom();
  if (isEven(container.question)) {
    container.answer = 'yes';
  } else {
    container.answer = 'no';
  }
  return container;
};

export default () => startGame(getQuestionAndAnswer, description);
