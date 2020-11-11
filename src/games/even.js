import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = genRandom();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => startGame(getQuestionAndAnswer, description);
