import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const container = {};
  container.question = genRandom();
  container.answerFromGame = isEven(container.question) ? 'yes' : 'no';

  return container;
};

export default () => startGame(getQuestionAndAnswer, description);
