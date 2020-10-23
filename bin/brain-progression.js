#!/usr/bin/env node
import name from '../src/index.js';
import { getRandomInt, rule, ifAnswers } from '../games/progression.js';

name(getRandomInt, rule, ifAnswers);
