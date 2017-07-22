import { cons } from 'hexlet-pairs';
import startGame from '..';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateData = () => {
  const number = Math.floor((Math.random() * 100) + 1);
  const answer = getCorrectAnswer(number);
  return cons(number, answer);
};

const game = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  startGame(description, generateData);
};

export default game;
