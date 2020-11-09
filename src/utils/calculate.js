const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case "*":
      return (operand1 * operand2).toString();
    case "+":
      return (operand1 + operand2).toString();
    case "-":
      return (operand1 - operand2).toString();
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

export default calculate;
