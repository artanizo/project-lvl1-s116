import { cons } from 'hexlet-pairs';
import startGame from '..';

const math = require('mathjs');

const getRandomNumber = () => math.randomInt(1, 100);

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  startGame(description, cons(getRandomNumber, getCorrectAnswer));
};

export default game;
