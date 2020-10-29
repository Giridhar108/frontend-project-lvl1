import promptly from 'promptly';

export default async function startGame(logic, ifAnswers, description) {
  const namePlayer = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${namePlayer}`);
  console.log(description);
  let rounds = 3;
  do {
    const numbers = logic();
    console.log(`Question ${numbers}`);
    const answer = await promptly.prompt('You answer:');
    const trueAnswer = ifAnswers(numbers, answer);
    if (trueAnswer.bool) {
      console.log('correct!');
      rounds -= 1;
      if (rounds === 0) {
        console.log(`Congratulations, ${namePlayer}!`);
      }
    } else {
      let notCorrectAnswer = trueAnswer.answer;
      if (answer === 'no') {
        notCorrectAnswer = 'yes';
      } else if (answer === 'yes') {
        notCorrectAnswer = 'no';
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${notCorrectAnswer}'.\nLet's try again, ${namePlayer}!`);
      break;
    }
  } while (rounds !== 0);
}
