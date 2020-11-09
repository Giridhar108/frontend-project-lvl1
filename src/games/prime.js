import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';
import isRrime from '../utils/isPrime.js';

const getQuestionAndAnswer = () => {
  const container = {};
  container.question = genRandom(2, 72);
  container.answerFromGame = isRrime(container.question) ? 'yes' : 'no';

  return container;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(getQuestionAndAnswer, description);
