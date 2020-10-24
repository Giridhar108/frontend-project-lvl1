#!/usr/bin/env node
import head from '../src/index.js';
import { getRandomInt, rule, ifAnswers } from '../games/progression.js';

head(getRandomInt, rule, ifAnswers);
