#!/usr/bin/env node

import name from '../src/index.js';

const getRandomInt = (max = 108) => {
  const a = Math.floor(Math.random() * Math.floor(max));
  const b = Math.floor(Math.random() * Math.floor(max));
  return `${a} ${b}`
};
const rule = () => console.log('What is the result of the expression?');
const ifAnswers = (x) => {
  let y = x.toString().split(' ')
  let a = +y.pop()
  let b = +y.pop()
function mygcd(x,y){
  if(y)
    return mygcd(y, x%y);
  else
    return x;
} 

return mygcd(a, b).toString()
};

name(getRandomInt, rule, ifAnswers);
