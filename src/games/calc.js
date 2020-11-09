import startGame from '../index.js';
import genRandom from '../utils/genRandom.js';

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
const forOperandRandom = 2;

const getQuestionAndAnswer = () => {
  const container = {};
  const firstOperand = genRandom(0, maxNumbers);
  const secondOperand = genRandom(0, maxNumbers);
  const operandRandom = genRandom(0, forOperandRandom);

  const operators = ['*', '+', '-'];
  const operator = operators[operandRandom];

  container.question = `${firstOperand} ${operator} ${secondOperand}`;
  container.answerFromGame = calculate(firstOperand, secondOperand, operator);

  return container;
};

const description = 'What is the result of the expression?';

export default () => startGame(getQuestionAndAnswer, description);
