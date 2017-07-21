import { cons } from 'hexlet-pairs';
import startGame from '..';

const math = require('mathjs');


const getRandomNumber = () => math.randomInt(1, 100);

const calcGcd = (expr) => {
  const arr = expr.split(' ');
  return math.gcd(arr[0], arr[1]);
};

const questionFunc = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  return `${x} ${y}`;
};

const game = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  startGame(description, cons(questionFunc, calcGcd));
};

export default game;
