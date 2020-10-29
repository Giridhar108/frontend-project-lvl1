import promptly from 'promptly';

export default async function giveName() {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${name}`);
}
