const findGcd = (number1, number2) => {
  if (number2) { return findGcd(number2, number1 % number2); }
  return number1;
};

export default findGcd;
