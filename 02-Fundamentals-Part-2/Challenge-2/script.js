// Coding Challenge 2 - Steven's advanced tip calculator
"use strict";
function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) return billValue * 0.15;
  else return billValue * 0.2;
}
const bills = [125, 555, 44];
let tips = [],
  total = [];
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  total[i] = [bills[i] + tips[i]];
}
console.log(bills, tips, total);
