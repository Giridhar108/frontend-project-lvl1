#!/usr/bin/env node
import promptly from 'promptly';

const reactionsCorrect = 'correct!';
const getRandomInt = (max = 108) => Math.floor(Math.random() * Math.floor(max));

(async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${name}`);
  const reactionsNotCorrectYes = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
  const reactionsNotCorrectNo = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  do {
    const num = getRandomInt(108);
    console.log(`Question ${num}`);
    const answer = await promptly.prompt('You answer:');
    if (answer === (num % 2 === 0 ? 'yes' : 'no')) {
      console.log(reactionsCorrect);
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (answer === 'no') {
      console.log(reactionsNotCorrectNo);
      i += 3;
    } else {
      console.log(reactionsNotCorrectYes);
      i += 3;
    }
  } while (i <= 2);
})();
