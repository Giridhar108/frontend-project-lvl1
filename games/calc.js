const maxNumbers = 108;
const foOperandRandom = 9;
export const getRandomInt = (max = maxNumbers) => {
  const firstOperand = Math.floor(Math.random() * Math.floor(max));
  const secondOperand = Math.floor(Math.random() * Math.floor(max));
  const operandRandom = Math.floor(Math.random() * Math.floor(foOperandRandom));
  let operand = '*';
  if (operandRandom <= 3) {
    operand = '+';
  } else if (operandRandom >= 7) {
    operand = '-';
  }
  const result = `${firstOperand} ${operand} ${secondOperand}`;
  return result;
};

export const rule = () => console.log('What is the result of the expression?');

export const ifAnswers = (n) => {
  const numbers = n.split(' ');
  const firstOperand = +numbers[0];
  const operand = numbers[1];
  const secondOperand = +numbers[2];
  if (operand === '*') {
    return (firstOperand * secondOperand).toString();
  } if (operand === '+') {
    return (firstOperand + secondOperand).toString();
  }
  return (firstOperand - secondOperand).toString();
};
