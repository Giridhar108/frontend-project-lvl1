#!/usr/bin/env node
import name from '../src/index.js';
import { getRandomInt, rule, ifAnswers } from '../games/prime.js';

name(getRandomInt, rule, ifAnswers);
