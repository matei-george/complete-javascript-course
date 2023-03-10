// Coding Challenge-2 || BMI calculation Improved

const weightJohn = 85;
const heightJohn = 1.76;
const heightMark = 1.88;
const weightMark = 95;

const bmiJohn = Math.round((weightJohn / heightJohn ** 2) * 10) / 10;
const bmiMark = Math.round((weightMark / heightMark ** 2) * 10) / 10;

if (bmiMark > bmiJohn) console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}.`);
else console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}`);
