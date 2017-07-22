import { cons } from 'hexlet-pairs';
import startGame from '..';

const getRandomNumber = (min, max) => Math.floor((Math.random() * ((max - min) + 1)) + min);

const getCorrectAnswer = (x, y) => {
  if (!y) return x;
  return getCorrectAnswer(y, x % y);
};

const generateData = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const answer = getCorrectAnswer(x, y);
  return cons(`${x} ${y}`, answer);
};

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, generateData);
};

export default game;
