#!/usr/bin/env node

import name from '../src/index.js';

const getRandomInt = (max = 108) => {
  const a = Math.floor(Math.random() * Math.floor(max));
  const b = Math.floor(Math.random() * Math.floor(max));
  return `${a} ${b}`;
};
const rule = () => console.log('Find the greatest common divisor of given numbers.');
const ifAnswers = (x) => {
  const y = x.toString().split(' ');
  const one = +y.pop();
  const two = +y.pop();

  function mygcd(v, z) {
    if (z) { return mygcd(z, v % z); }
    return v;
  }

  return mygcd(one, two).toString();
};

name(getRandomInt, rule, ifAnswers);
