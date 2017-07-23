import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const askName = () => readlineSync.question('May I have your name? ');

const getPlayerAnswer = () => readlineSync.question('Your answer: ');

const game = (description, genFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const name = askName();
  console.log(`Hello, ${name}!`);

  let i = 1;

  while (i <= 3) {
    const data = genFunc();

    const currentQuestion = car(data);
    const currentCorrect = cdr(data).toString();

    console.log(`Question: ${currentQuestion}`);
    const playerAnswer = getPlayerAnswer();

    if (playerAnswer === currentCorrect) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${currentCorrect}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
