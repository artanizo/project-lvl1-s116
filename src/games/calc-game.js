import * as utils from '../utils';

const getRandomOperator = () => {
    const OPERATORS = ['+', '-', '*'];
    return OPERATORS[Math.floor(Math.random() * OPERATORS.length)];
};

const getRightAnswer = (x, y, op) => {
    if (op === '+') return x + y;
    if (op === '-') return x - y;
    if (op === '*') return x * y;
    console.log(`Error: no operation ${op} was found!`);
    return null;
};

const brainCalc = (name) => {
    const round =  (x, y, op) => {
        const answer = utils.askQuestion(`${x} ${op} ${y}`);
        const expectedAnswer = getRightAnswer(x, y, op);
        return utils.checkAnswer(parseInt(answer), expectedAnswer, name);
    };

    console.log('What is the result of the expression?');

    const firstRound = round(utils.getRandomNumber(), utils.getRandomNumber(), getRandomOperator());
    if (!firstRound) return;

    const secondRound = round(utils.getRandomNumber(), utils.getRandomNumber(), getRandomOperator());
    if (!secondRound) return;

    const thirdRound = round(utils.getRandomNumber(), utils.getRandomNumber(), getRandomOperator());
    if (!thirdRound) return;

    utils.gratsMessage(name);


};

export default brainCalc;