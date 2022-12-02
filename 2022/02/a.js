import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const rounds = file.split('\n');

const cypher = {
  X: 'A',
  Y: 'B',
  Z: 'C',
};

const result = rounds.reduce((acc, curr) => {
  const [opponent, me] = curr.split(' ');

  const winScore = Object.keys(cypher).indexOf(me) + 1;

  if (opponent === cypher[me]) {
    return acc + winScore + 3;
  }

  if (opponent === 'C' && cypher[me] === 'A') {
    return acc + winScore + 6;
  }

  if (opponent === 'B' && cypher[me] === 'C') {
    return acc + winScore + 6;
  }

  if (opponent === 'A' && cypher[me] === 'B') {
    return acc + winScore + 6;
  }

  return acc + winScore;
}, 0);

console.log(result);
