import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const result = Math.max(
  ...file
    .split('\n\n')
    .map((group) => group.split('\n').reduce((acc, curr) => acc + parseInt(curr), 0))
);

console.log(result);
