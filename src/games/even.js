import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getRiddleData = () => {
  const number = getRandomNumber(1, 100);
  const answer = isNumberEven(number) ? 'yes' : 'no';
  return cons(number, answer.toString());
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  startGame(description, getRiddleData);
};

export default game;
