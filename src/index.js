import promptly from 'promptly';

export default async function startGame(getQuestionAndAnswer, description) {
  const namePlayer = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${namePlayer}`);
  console.log(description);
  let rounds = 3;

  do {
    const numbers = getQuestionAndAnswer();
    console.log(`Question ${numbers.question}`);
    const answer = await promptly.prompt('You answer:');
    if (answer === numbers.answer) {
      console.log('correct!');
      rounds -= 1;
      if (rounds === 0) {
        console.log(`Congratulations, ${namePlayer}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numbers.answer}'.\nLet's try again, ${namePlayer}!`);
      break;
    }
  } while (rounds !== 0);
}
