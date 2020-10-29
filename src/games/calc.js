import startGame from '../index.js';
import randomizer from '../../utils/randomizer.js';

const maxNumbers = 108;
const foOperandRandom = 9;

export const getCondition = (max = maxNumbers) => {
  const firstOperand = randomizer(max);
  const secondOperand = randomizer(max);
  const operandRandom = randomizer(foOperandRandom);
  let operand = '*';
  if (operandRandom <= 3) {
    operand = '+';
  } else if (operandRandom >= 7) {
    operand = '-';
  }
  const result = `${firstOperand} ${operand} ${secondOperand}`;
  return result;
};

export const description = 'What is the result of the expression?';

export const ifAnswers = (n, answer) => {
  const numbers = n.split(' ');
  const firstOperand = +numbers[0];
  const operand = numbers[1];
  const secondOperand = +numbers[2];
  const result = {};

  if (operand === '*') {
    result.answer = (firstOperand * secondOperand).toString();
  } else if (operand === '+') {
    result.answer = (firstOperand + secondOperand).toString();
  } else if (operand === '-') {
    result.answer = (firstOperand - secondOperand).toString();
  }

  if (result.answer === answer) {
    result.bool = (true);
  } if (result.answer !== answer) {
    result.bool = (false);
  }

  return result;
};

export default () => startGame(getCondition, ifAnswers, description);
