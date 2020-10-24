const maxNumber = 108;
export const getRandomInt = (max = maxNumber) => {
  const firstNumber = Math.floor(Math.random() * Math.floor(max));
  const secondNumber = Math.floor(Math.random() * Math.floor(max));
  return `${firstNumber} ${secondNumber}`;
};

export const rule = () => console.log('Find the greatest common divisor of given numbers.');

export const ifAnswers = (numbers) => {
  const arrayNumbers = numbers.toString().split(' ');
  const one = +arrayNumbers.pop();
  const two = +arrayNumbers.pop();

  function mygcd(oneV, twoZ) {
    if (twoZ) { return mygcd(twoZ, oneV % twoZ); }
    return oneV;
  }

  return mygcd(one, two).toString();
};
