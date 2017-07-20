import getRandomNumber from '../utils';
import startGame from '../game-service';

const getRandomOperator = () => {
  const OPERATORS = ['+', '-', '*'];
  return OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
};

const getCorrectAnswer = (x, y, op) => {
  if (op === '+') return x + y;
  if (op === '-') return x - y;
  if (op === '*') return x * y;
  console.log(`Error: no operation ${op} was found!`);
  return null;
};

const game = (numberOfRounds) => {
  const description = 'What is the result of the expression?';
  const objectives = [];
  let i = 0;
  while (i < numberOfRounds) {
    const x = getRandomNumber();
    const y = getRandomNumber();
    const op = getRandomOperator();

    const obj = new Map();
    obj.set('question', `${x} ${op} ${y}`);
    obj.set('correct', getCorrectAnswer(x, y, op).toString());

    objectives.push(obj);
    i += 1;
  }

  startGame(description, objectives);
};

export default game;
