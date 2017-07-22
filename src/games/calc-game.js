import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const getRandomOperator = () => {
  const OPERATORS = ['+', '-', '*'];
  return OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
};

const getCorrectAnswer = (x, y, op) => {
  if (op === '+') return x + y;
  if (op === '-') return x - y;
  return x * y;
};

const generateData = () => {
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  const op = getRandomOperator();
  const answer = getCorrectAnswer(x, y, op);
  return cons(`${x} ${op} ${y}`, answer);
};

const game = () => {
  const description = 'What is the result of the expression?';
  startGame(description, generateData);
};

export default game;
