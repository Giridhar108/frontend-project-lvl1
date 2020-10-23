export const getRandomInt = (max = 19) => {
  const a = Math.floor(Math.random() * Math.floor(max));
  const b = Math.floor(Math.random() * Math.floor(2));
  const c = Math.floor(Math.random() * Math.floor(107)) + 1;
  const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
  if (b === 0) {
    return c;
  }
  return numbers[a];
};

export const rule = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const ifAnswers = (num) => {
  if (num < 2) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  const numSqrt = Math.sqrt(num) + 1;

  for (let i = 2; i < numSqrt; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
