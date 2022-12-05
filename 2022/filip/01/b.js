import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const result = file
  .split('\n\n')
  .map((group) => {
    return group.split('\n').reduce((acc, curr) => acc + parseInt(curr), 0);
  })
  .sort((a, b) => a - b)
  .splice(elfGroups.length - 3, 3)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);
