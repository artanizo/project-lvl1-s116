import readlineSync from 'readline-sync';

export const askName = () => readlineSync.question('May I have your name? ');

export const getPlayerAnswer = () => readlineSync.question('Your answer: ').trim();

export const isAnswerCorrect = (playerAnswer, correctAnswer) => playerAnswer === correctAnswer;

const game = (description, objectivesArray) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const name = askName();
  console.log(`Hello, ${name}!`);

  if (!objectivesArray) {
    return;
  }

  const result = objectivesArray.every((element) => {
    console.log(`Question: ${element.get('question')}`);
    const playerAnswer = getPlayerAnswer();
    const correctAnswer = element.get('correct');

    if (isAnswerCorrect(playerAnswer, correctAnswer)) {
      console.log('Correct!');
      return true;
    }

    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  });

  if (result) console.log(`Congratulations, ${name}!`);
};

export default game;
