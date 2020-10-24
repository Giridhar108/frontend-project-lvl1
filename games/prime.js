const numberOfPrimes = 19;
const maxNumberRandom = 107;
const variable = 2;
export const getRandomInt = (max = numberOfPrimes) => {
  const chosePrime = Math.floor(Math.random() * Math.floor(max));
  const variableBetweenPrimeNotPrime = Math.floor(Math.random() * Math.floor(variable));
  const maxNumber = Math.floor(Math.random() * Math.floor(maxNumberRandom)) + 1;
  const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
  if (variableBetweenPrimeNotPrime === 0) {
    return maxNumber;
  }
  return numbers[chosePrime];
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
