const maxNumber = 10
const stepAndLengthNumbers = 8
const minStep = 2
const minLength = 5
export const getRandomInt = (max = maxNumber) => {
  const arr = [];
  const firstNumberArr = Math.floor(Math.random() * Math.floor(max));
  const stepArray = Math.floor(Math.random() * Math.floor(stepAndLengthNumbers)) + minStep;
  const length = Math.floor(Math.random() * Math.floor(stepAndLengthNumbers)) + minLength;

  while (arr.length <= length) {
    arr.push(firstNumberArr);
  }
  const prog = (array, y) => {
    let step = y;
    const forEslintArray = array;
    for (let i = 0; i < array.length; i += 1) {
      forEslintArray[i] += step;
      step += y;
    }
    return forEslintArray;
  };

  const result = prog(arr, stepArray);
  const variableLength = result[length - 3];
  return result.join(' ').replace(variableLength, '..');
};

export const rule = () => console.log('What number is missing in the progression?');

export const ifAnswers = (n) => {
  const arr = n.split(' ');
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '..') {
      arr[i] = (+arr[i - 1] - +arr[i - 2]) + +arr[i - 1];
      result = arr[i];
    }
  }
  return result.toString();
};
