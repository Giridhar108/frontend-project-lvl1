export default (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivider = Math.sqrt(num);
  for (let divider = 2; divider <= maxDivider; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};
