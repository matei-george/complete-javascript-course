// Coding Challenge-1 || BMI calculation

// Fixed using const.
const weightJohn = 85;
const heightJohn = 1.76;
const heightMark = 1.88;
const weightMark = 95;

const bmiJohn = weightJohn / heightJohn ** 2;
const bmiMark = weightMark / heightMark ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);
