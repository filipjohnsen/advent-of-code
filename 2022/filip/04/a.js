import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const pairs = file.split('\n');

const result = pairs.filter((pair) => {
  const [a, b] = pair.split(',');

  const aMin = parseInt(a.split('-')[0]);
  const aMax = parseInt(a.split('-')[1]);
  const bMin = parseInt(b.split('-')[0]);
  const bMax = parseInt(b.split('-')[1]);

  if ((aMin >= bMin && aMax <= bMax) || (bMin >= aMin && bMax <= aMax)) {
    return pair;
  }
}).length;

console.log(result);
