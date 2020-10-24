import promptly from 'promptly';

export default async function head(logic, rule, ifAnswers) {
  const namePlayer = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${namePlayer}`);
  rule();
  let i = 0;
  do {
    const numbers = logic();
    console.log(`Question ${numbers}`);
    const answer = await promptly.prompt('You answer:');
    if (answer === ifAnswers(numbers)) {
      console.log('correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${namePlayer}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ifAnswers(numbers)}'.\nLet's try again, ${namePlayer}!`);
      i += 3;
    }
  } while (i <= 2);
}
