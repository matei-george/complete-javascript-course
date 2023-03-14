// [----Variables and numbers---]

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("jonas");
// console.log(23);

// let firstName = "Matt";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let _function = "Hello";
// console.log(_function);

// let PI = 3.141592;
// console.log(PI);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(myFirstJob, myCurrentJob);

// [----Data Types----]
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);
// console.log(typeof "Hello there");
// console.log(typeof true);
// console.log(typeof 3.141592);

// javascriptIsFun = "YES";
// console.log(javascriptIsFun);

// let variable;
// console.log(variable);
// variable = null;
// console.log(variable);

// console.log(typeof null);

// [----Let var and Const----]
// let age = 22;
// age = 50;
// const year = 2023;
// console.log(year);

// var job = "Brogrammer";
// console.log(job);

// [----Operator----]
// const currentYear = 2022;
// const ageMatt = currentYear - 1922;
// const ageSarah = currentYear - 1958;
// console.log(ageMatt, ageSarah, "<- Their age");

// const firstName = "Matei";
// const lastName = "Murarasu";
// console.log(firstName + " " + lastName);

// let x = 10 + 32;
// x += 10;
// x++;
// console.log(x);

// const isRightAge = ageSarah >= 18;

// console.log(currentYear - 1922 >= currentYear - 2018);

// let a, y;
// a = y = 2 ** 3;
// console.log(a, y);
// const avgAge = (ageMatt + ageSarah) / 2;
// console.log(ageMatt, ageSarah, avgAge);

// // [----Strings and templates----]
// const someName = "Matt";
// const job = "programmer";
// const birthYear = 2001;

// const matt = "I'm " + someName + ", a " + job + " who is " + (currentYear - birthYear) + " years old.";
// console.log(matt);
// const mattNew = `I'm ${firstName}, a ${job} from Romania who is ${currentYear - birthYear} years old.`;
// console.log(mattNew);
// console.log(`This is just a string`);

// console.log(`This is a string
// which has multiple lines
// of code.`);

// [----If Else----]
// const age = 14;

// if (age >= 18) console.log(`Student is old enough to drive 😊`);
// else
//   console.log(`Student is not old enough to drive 😥.
// Needs grow ${18 - age} more years`);

// const birthYear = 1853;
// let century;
// if (birthYear <= 1900) {
//   century = 19;
// } else if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// [----Type Conversion----]

// const inputYear = "1991";
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(typeof String(18));

// // [----Type Coercion----]
// console.log("23" + "10" + 3);

// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(undefined));
// console.log(Boolean("Hello"));
// console.log(Boolean({}));

// const money = 0;
// if (money) console.log(`Don't spend it all`);
// else console.log(`You should get a job.`);

// let height = 0;
// if (height) console.log(`Defined`);
// else console.log(`Undefined`);

// const age = 21;
// if (age === 21) console.log("a");
// else console.log("b");
// console.log(18 === 18);
// console.log("18" === 18);

// const favNumber = Number(prompt(`What is your favourite number?`));
// if (favNumber === 23) console.log(`Cool`);
// else console.log(`Not cool`);

// [----Logical Operators----]
const hasDriversLicence = true;
const hasGoodVision = true;
const isTired = true;
console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
if (hasDriversLicence && hasGoodVision && !isTired) console.log(`Driver is ready to drive`);
else console.log(`Driver is not ready to drive`);
