import promptly from 'promptly';

export default async function head(logic, rule, ifAnswers) {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${name}`);
  rule();

  let i = 0;
  do {
    const num = logic();
    console.log(`Question ${num}`);
    const answer = await promptly.prompt('You answer:');
    if (answer === ifAnswers(num)) {
      console.log('correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ifAnswers(num)}'.\nLet's try again, ${name}!`);
      i += 3;
    }
  } while (i <= 2);
}
