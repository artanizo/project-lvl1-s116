import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateData = () => {
  const number = getRandomNumber(1, 100);
  const answer = getCorrectAnswer(number);
  return cons(number, answer);
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  startGame(description, generateData);
};

export default game;
