import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

const maxNumbers = 108;
const forOperandRandom = 9;

const getQuestionAndAnswer = () => {
  const container = {};
  const firstOperand = genRandom(0, maxNumbers);
  const secondOperand = genRandom(0, maxNumbers);
  const operandRandom = genRandom(0, forOperandRandom);

  let operand = '*';
  if (operandRandom <= 3) {
    operand = '+';
  } else if (operandRandom >= 7) {
    operand = '-';
  }

  container.question = `${firstOperand} ${operand} ${secondOperand}`;

  if (operand === '*') {
    container.answer = (firstOperand * secondOperand).toString();
  } else if (operand === '+') {
    container.answer = (firstOperand + secondOperand).toString();
  } else if (operand === '-') {
    container.answer = (firstOperand - secondOperand).toString();
  }

  return container;
};

const description = 'What is the result of the expression?';

export default () => startGame(getQuestionAndAnswer, description);
