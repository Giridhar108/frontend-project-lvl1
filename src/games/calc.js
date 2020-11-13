import startGame from '../index.js';
import genRandom from '../utils.js';

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '*':
      return (operand1 * operand2).toString();
    case '+':
      return (operand1 + operand2).toString();
    case '-':
      return (operand1 - operand2).toString();
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const maxNumbers = 108;
const operators = ['*', '+', '-'];

const getQuestionAndAnswer = () => {
  const firstOperand = genRandom(0, maxNumbers);
  const secondOperand = genRandom(0, maxNumbers);

  const operator = operators[genRandom(0, operators.length - 1)];

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const rightAnswer = calculate(firstOperand, secondOperand, operator);

  return { question, rightAnswer };
};

const description = 'What is the result of the expression?';

export default () => startGame(getQuestionAndAnswer, description);
