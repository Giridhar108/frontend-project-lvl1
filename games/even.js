export const getRandomInt = (max = 108) => Math.floor(Math.random() * Math.floor(max));
export const rule = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const ifAnswers = (number) => (number % 2 === 0 ? 'yes' : 'no');
