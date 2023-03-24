"use strict";

// Functions calling other functions
const pieces = (fruit) => fruit * 4;

function fruitProcessor(apples, oranges) {
  const applePieces = pieces(apples);
  const orangePieces = pieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge = (birthYear) => 2023 - birthYear;

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) return `${firstName} retires in ${retirement} years`;
  else return -1;
};

console.log(yearsUntilRetirement(2001, "Matt"));
console.log(yearsUntilRetirement(1950, "Jack"));
