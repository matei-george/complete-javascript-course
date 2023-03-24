"use strict";

// Arrays
const friend1 = "Michael";
const friend2 = "Jack";
const friend3 = "Steven";

// Literal Syntax
const friends = ["Michael", "Jack", "Steven"];
console.log(friends);

// Dynamic Syntax
const years = new Array(2001, 2002, 2003);

const matt = ["Matei", "Murarasu", 2023 - 2001, "student", friends];

console.log(matt);

// Exercise - Calculating ages in another array
const calcAge = (birthyear) => 2023 - birthyear;
const birthYears = [1990, 1968, 2002, 2010, 2018];
const ages = new Array(5);
for (let i = 0; i < birthYears.length; i++) ages[i] = calcAge(birthYears[i]);
console.log(ages);

// Methods that add
const newLength = friends.push("Jay");
console.log(newLength);

friends.unshift("john");
console.log(friends);
// Methods that remove
console.log(friends.pop());
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Jack") ? true : false);

friends.shift("Michael");
friends.push("Michael");
if (friends.includes("Michael")) console.log(`Michael is here`);
else console.log(`Michael was here`);
