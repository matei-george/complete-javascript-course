"use strict";

let hasDriversLicence = false;
const passTest = true;

passTest === true ? (hasDriversLicence = true) : (hasDriversLicence = false);
hasDriversLicence === true ? console.log(`This person has a driving license`) : console.log(`This person does not have a driving license`);

function logger() {
  console.log(`Hello from a function`);
}

// Invoking, calling, running
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

// Function declaration
const age1 = calcAge1(2001);
console.log(age1);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Funcion expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2001);
console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in 
  ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, "Matt"));
console.log(yearsUntilRetirement(1980, "Bob"));
