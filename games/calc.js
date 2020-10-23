export const getRandomInt = (max = 108) => {
  const a = Math.floor(Math.random() * Math.floor(max));
  const b = Math.floor(Math.random() * Math.floor(max));
  const c = Math.floor(Math.random() * Math.floor(9));
  let d = '*';
  if (c <= 3) {
    d = '+';
  } else if (c >= 7) {
    d = '-';
  }
  const result = `${a} ${d} ${b}`;
  return result;
};
export const rule = () => console.log('What is the result of the expression?');
export const ifAnswers = (n) => {
  const num = n.split(' ');
  const a = +num[0];
  const d = num[1];
  const b = +num[2];
  if (d === '*') {
    return (a * b).toString();
  } if (d === '+') {
    return (a + b).toString();
  }
  return (a - b).toString();
};
