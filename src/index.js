import promptly from "promptly";

export default async function startGame(getQuestionAndAnswer, description) {
  const namePlayer = await promptly.prompt("May I have your name?");
  console.log(`Nice to meet you, ${namePlayer}`);
  console.log(description);
  const roundsCount = 3;

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, rightAnswer } = getQuestionAndAnswer();
    console.log(`Question ${question}`);
    const answer = await promptly.prompt("You answer:");
    if (answer === rightAnswer) {
      console.log("correct!");
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`) 
      console.log(`Let's try again, ${namePlayer}!`);
      return;
    }
  }
  console.log(`Congratulations, ${namePlayer}!`);
}
