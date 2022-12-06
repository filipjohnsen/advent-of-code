import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const packets = file.split('');

let signal = [];
let start = 0;
let idx = 0;

for (const packet of packets) {
  if (!signal.includes(packet)) {
    signal.push(packet);
  } else {
    signal = [];
  }

  if (signal.length === 14) {
    start = idx;
    break;
  }

  idx++;
}

console.log(start);
