"use strict";

// Arrays
const friend1 = "Michael";
const friend2 = "Jack";
const friend3 = "Steven";

// Literal Syntax
const friend = ["Michael", "Jack", "Steven"];
console.log(friend);

// Dynamic Syntax
const years = new Array(2001, 2002, 2003);

const matt = ["Matei", "Murarasu", 2023 - 2001, "student", friend];

console.log(matt);

// Exercise - Calculating ages in another array
const calcAge = (birthyear) => 2023 - birthyear;
const birthYears = [1990, 1968, 2002, 2010, 2018];
const ages = new Array(5);
for (let i = 0; i < birthYears.length; i++) ages[i] = calcAge(birthYears[i]);
console.log(ages);
