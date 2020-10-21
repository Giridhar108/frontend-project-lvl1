import promptly from 'promptly';

(async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Nice to meet you, ${name}`);
})();
