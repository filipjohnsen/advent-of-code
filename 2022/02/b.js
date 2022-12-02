import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const rounds = file.split('\n');

const plays = ['A', 'B', 'C'];

const losePlay = {
  A: 'C',
  B: 'A',
  C: 'B',
};

const winPlay = {
  A: 'B',
  B: 'C',
  C: 'A',
};

const calculateWinScore = (play) => {
  const score = plays.indexOf(play) + 1;

  return score;
};

const result = rounds.reduce((acc, curr) => {
  const [opponent, me] = curr.split(' ');

  if (me === 'Y') {
    return acc + calculateWinScore(opponent) + 3;
  }

  if (me === 'X') {
    const play = losePlay[opponent];
    return acc + calculateWinScore(play) + 0;
  }

  if (me === 'Z') {
    const play = winPlay[opponent];
    return acc + calculateWinScore(play) + 6;
  }

  return acc;
}, 0);

console.log(result);
