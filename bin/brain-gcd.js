#!/usr/bin/env node

import name from '../src/index.js';
import { getRandomInt, rule, ifAnswers } from '../games/gcd.js';

name(getRandomInt, rule, ifAnswers);
