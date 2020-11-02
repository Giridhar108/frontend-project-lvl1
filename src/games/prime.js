import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';
import isRprime from '../utils/isPrime.js';

const getQuestionAndAnswer = () => {
  const container = {};
  container.question = genRandom(2, 72);
  if (isRprime(container.question)) {
    container.answer = 'yes';
  } else {
    container.answer = 'no';
  }
  return container;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(getQuestionAndAnswer, description);
