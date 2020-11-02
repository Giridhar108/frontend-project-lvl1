const mygcd = (oneV, twoZ) => {
  if (twoZ) { return mygcd(twoZ, oneV % twoZ); }
  return oneV;
};

export default mygcd;
