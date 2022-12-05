import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const elves = file.split('\n');

let mostCaloriesConsumed = 0;
let currentCalories = 0;

elves.forEach((elf) => {
  if (elf == '') {
    if (currentCalories > mostCaloriesConsumed) {
      mostCaloriesConsumed = currentCalories;
    }

    currentCalories = 0;
    return;
  }

  currentCalories += parseInt(elf);
});

console.log(mostCaloriesConsumed);
