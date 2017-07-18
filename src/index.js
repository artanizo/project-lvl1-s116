import readlineSync from 'readline-sync';

const welcomeMessage = (description) => {
  console.log('Welcome to the Brain Games!');
  if (description) console.log(description);
};

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (playerAnswer, rightAnswer, name) => {
  if (playerAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const round = (number, name) => {
  const answer = askQuestion(number);
  const expectedAnswer = getRightAnswer(number);
  const check = checkAnswer(answer, expectedAnswer, name);
  return check;
};

const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);

const game = () => {
  welcomeMessage();
  askName();
};

const brainEven = () => {
  welcomeMessage('Answer "yes" if number even otherwise answer "no".');
  const name = askName();

  const firstRound = round(getRandomNumber(), name);
  if (!firstRound) return;

  const secondRound = round(getRandomNumber(), name);
  if (!secondRound) return;

  const thirdRound = round(getRandomNumber(), name);
  if (!thirdRound) return;

  console.log(`Congratulations, ${name}!`);
};


export { game, brainEven };
