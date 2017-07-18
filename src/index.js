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

const round = name => (number) => {
  const answer = askQuestion(number);
  const expectedAnswer = getRightAnswer(number);
  return checkAnswer(answer, expectedAnswer.trim(), name);
};

const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);

const game = () => {
  welcomeMessage();
  askName();
};

const brainEven = () => {
  welcomeMessage('Answer "yes" if number even otherwise answer "no".');
  const name = askName();

  const roundFunc = round(name);

  const firstRound = roundFunc(getRandomNumber());
  if (!firstRound) return;

  const secondRound = roundFunc(getRandomNumber());
  if (!secondRound) return;

  const thirdRound = roundFunc(getRandomNumber());
  if (!thirdRound) return;

  console.log(`Congratulations, ${name}!`);
};


export { game, brainEven };
