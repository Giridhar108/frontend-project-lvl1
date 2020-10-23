#!/usr/bin/env node

import name from '../src/index.js';

const getRandomInt = (max = 108) => {
    const a = Math.floor(Math.random() * Math.floor(18)) 
    const b = Math.floor(Math.random() * Math.floor(18)) 
    const c = Math.floor(Math.random() * Math.floor(9))
    let d = '*'
    if(c <= 3) {
      d = '+'
    } else if (c >= 7) {
      d = '-'
    } 
    let result = `${a} ${d} ${b}`
  return result
  } 
const rule = () => console.log('What is the result of the expression?');
const ifAnswers = (n) => {
    const num = n.split(' ') 
    const a = +num[0] 
    const d = num[1]
    const b = +num[2]
    if(d === '*'){
      return (a * b).toString()
    } else if (d === '+') {
      return (a + b).toString()
    } else {
      return (a - b).toString()
    }
};

name(getRandomInt, rule, ifAnswers);