import getRandomNumber from '../utils';
import startGame from '../game-service';

const getCorrectAnswer = (x, y) => {
  if (!y) return x;
  return getCorrectAnswer(y, x % y);
};

const game = (numberOfRounds) => {
  const description = 'Find the greatest common divisor of given numbers.';

  const objectives = [];

  let i = 0;
  while (i < numberOfRounds) {
    const x = getRandomNumber();
    const y = getRandomNumber();

    const obj = new Map();
    obj.set('question', `${x} ${y}`);
    obj.set('correct', getCorrectAnswer(x, y).toString());

    objectives.push(obj);
    i += 1;
  }

  startGame(description, objectives);
};

export default game;
