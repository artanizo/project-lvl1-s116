import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const getCorrectAnswer = (number) => {
  if (number === 1) {
    return 'no';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const generateData = () => {
  const number = getRandomNumber(1, 200);
  const answer = getCorrectAnswer(number);
  return cons(number, answer);
};

const game = () => {
  const description = 'Answer "yes" if number is prime otherwise answer "no".';

  startGame(description, generateData);
};

export default game;
