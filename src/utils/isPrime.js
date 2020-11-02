export default (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const numSqrt = Math.sqrt(num) + 1;
  for (let i = 2; i < numSqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
