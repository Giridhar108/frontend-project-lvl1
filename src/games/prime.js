import startGame from '../index.js';
import genRandom from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivider = Math.sqrt(num);
  for (let divider = 2; divider <= maxDivider; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = genRandom(2, 72);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(getQuestionAndAnswer, description);
