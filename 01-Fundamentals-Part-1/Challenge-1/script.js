// Coding Challenge-1 || BMI calculation

let weightJohn,
  heightJohn,
  weightMark,
  heightMark,
  bmiJohn,
  bmiMark,
  markHigherBMI;

weightJohn = 92;
heightJohn = 1.95;

weightMark = 78;
heightMark = 1.69;

bmiJohn = weightJohn / heightJohn ** 2;
bmiMark = weightMark / heightMark ** 2;

markHigherBMI = bmiMark > bmiJohn;

console.log(bmiJohn, bmiMark, markHigherBMI);
