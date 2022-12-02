import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const rounds = file.split('\n');

const plays = ['A', 'B', 'C'];

const calculateScore = (play) => {
  const score = plays.indexOf(play) + 1;

  return score;
};

const result = rounds.reduce((acc, curr) => {
  const [opponent, me] = curr.split(' ');

  const index = plays.indexOf(opponent);

  // draw
  if (me === 'Y') {
    const play = opponent;
    return acc + calculateScore(play) + 3;
  }

  // loose
  if (me === 'X') {
    const play = plays[index - 1] ?? plays[plays.length - 1];

    return acc + calculateScore(play) + 0;
  }

  // win
  const play = plays[index + 1] ?? plays[0];

  return acc + calculateScore(play) + 6;
}, 0);

console.log(result);
