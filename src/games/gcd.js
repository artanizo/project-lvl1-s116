import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const calcGcd = (x, y) => {
  if (!y) return x;
  return calcGcd(y, x % y);
};

const getRiddleData = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const answer = calcGcd(x, y);
  return cons(`${x} ${y}`, answer.toString());
};

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, getRiddleData);
};

export default game;
