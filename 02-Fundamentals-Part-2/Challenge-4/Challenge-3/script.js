// Challenge : BMI calculator with objects
"use strict";
// Tip calculator with loops and arrays
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];
function calcTip(bill) {
  let tip = undefined;
  if (bill >= 50 && bill <= 300) tip = bill * 0.15;
  else tip = bill * 0.2;
  return tip;
}
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(tips, totals);
const avgTotals = calcAverage(totals);
console.log(avgTotals);
