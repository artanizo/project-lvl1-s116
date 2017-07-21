import { cons } from 'hexlet-pairs';
import startGame from '..';

const math = require('mathjs');

const getRandomNumber = () => math.randomInt(1, 100);

const getRandomOperator = () => {
  const OPERATORS = ['+', '-', '*'];
  return OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
};

const evalCalc = expr => math.eval(expr);

const questionFunc = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const op = getRandomOperator();
  return `${x} ${op} ${y}`;
};

const game = () => {
  const description = 'What is the result of the expression?';
  startGame(description, cons(questionFunc, evalCalc));
};

export default game;
