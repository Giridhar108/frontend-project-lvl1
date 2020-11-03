import promptly from 'promptly';

export default async function startGame(getQuestionAndAnswer, description) {
  const namePlayer = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${namePlayer}`);
  console.log(description);
  const rounds = 3;

  for (let i = 0; i <= 2; i += 1) {
    const numbers = getQuestionAndAnswer();
    console.log(`Question ${numbers.question}`);
    const answer = await promptly.prompt('You answer:');
    if (answer === numbers.answer) {
      console.log('correct!');
      if (rounds === 0) {
        console.log(`Congratulations, ${namePlayer}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numbers.answer}'.\nLet's try again, ${namePlayer}!`);
      break;
    }
  }
}
