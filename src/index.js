import promptly from 'promptly';

export default async function startGame(getQuestionAndAnswer, description) {
  const namePlayer = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${namePlayer}`);
  console.log(description);
  const round = 2;

  for (let i = 0; i <= round; i += 1) {
    const { question, answerFromGame } = getQuestionAndAnswer();
    console.log(`Question ${question}`);
    const answer = await promptly.prompt('You answer:');
    if (answer === answerFromGame) {
      console.log('correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerFromGame}'.\nLet's try again, ${namePlayer}!`);
      return;
    }
  }
  console.log(`Congratulations, ${namePlayer}!`);
}
