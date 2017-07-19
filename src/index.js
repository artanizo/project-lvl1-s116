import { askName } from './utils';
import brainCalc from './games/calc-game';
import brainEven from './games/even-game';
import brainGcd from './games/gcd-game';

const getGamesMap = () => {
  const games = new Map();
  games.set('even-game', brainEven);
  games.set('calc-game', brainCalc);
  games.set('gcd-game', brainGcd);
  return games;
};

const game = (gameName = '') => {
  console.log('Welcome to the Brain Games!');
  const name = askName();

  const games = getGamesMap();
  const gameStartPoint = games.get(gameName);

  if (gameStartPoint) gameStartPoint(name);
};

export default game;
