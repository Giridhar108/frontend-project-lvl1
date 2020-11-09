const findGcd = (number1, number2) => {
  if (number2) { return mygcd(number2, number1 % number2); }
  return number1;
};

export default findGcd;
