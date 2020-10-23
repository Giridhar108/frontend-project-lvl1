#!/usr/bin/env node

import name from '../src/index.js';

const getRandomInt = (max = 108) => Math.floor(Math.random() * Math.floor(max));
const rule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const ifAnswers = (n) => (n % 2 === 0 ? 'yes' : 'no');

name(getRandomInt, rule, ifAnswers);