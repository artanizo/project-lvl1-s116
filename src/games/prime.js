import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const isNumberPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRiddleData = () => {
  const number = getRandomNumber(1, 200);
  const answer = isNumberPrime(number) ? 'yes' : 'no';
  return cons(number, answer);
};

const game = () => {
  const description = 'Answer "yes" if number is prime otherwise answer "no".';

  startGame(description, getRiddleData);
};

export default game;
