import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';
import isEven from '../utils/isEven.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const container = {};
  container.question = genRandom();
  container.answerFromGame = isEven(container.question) ? 'yes' : 'no';

  return container;
};

export default () => startGame(getQuestionAndAnswer, description);
