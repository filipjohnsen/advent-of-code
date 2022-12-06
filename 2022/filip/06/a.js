import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const packets = file.split('');

let signal = [];

for (const [idx, packet] of packets.entries()) {
  if (signal.length === 4) {
    console.log(idx);
    break;
  }

  !signal.includes(packet) ? signal.push(packet) : (signal = []);
}
