#!/usr/bin/env node
import name from '../src/index.js';

const getRandomInt = (max = 10) => {
  const arr = [];
  const a = Math.floor(Math.random() * Math.floor(max));
  const b = Math.floor(Math.random() * Math.floor(8)) + 2;
  const length = Math.floor(Math.random() * Math.floor(8)) + 5;

  while (arr.length <= length) {
    arr.push(a);
  }
  const prog = (array, y) => {
    let d = y;
    const bArray = array;
    for (let i = 0; i < array.length; i += 1) {
      bArray[i] += d;
      d += y;
    }
    return array;
  };

  const result = prog(arr, b);
  const variable = result[length - 3];
  return result.join(' ').replace(variable, '..');
};

const rule = () => console.log('What number is missing in the progression?');

const ifAnswers = (n) => {
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

name(getRandomInt, rule, ifAnswers);
