"use strict";
// The For Loop
const array = ["Matei", "Murarasu", 2001, "programmer"];
const types = [];
for (let i = 0; i < array.length; i++) {
  types.push(typeof array[i]);
}
console.log(types);

const years = [1992, 2007, 1692, 2021];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== "string") continue;
  else console.log(array[i], typeof array[i]);
}

// While Loop
let dice = Math.round(Math.random() * 6);
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.round(Math.random() * 6) + 1;
  if (dice === 6) console.log(`The loop has ended`);
}
