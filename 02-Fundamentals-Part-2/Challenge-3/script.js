// Challenge : BMI calculator with objects
"use strict";
const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Math.round((this.weight / this.height ** 2) * 10) / 10;
    return this.bmi;
  },
};
const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = Math.round((this.weight / this.height ** 2) * 10) / 10;
    return this.bmi;
  },
};
if (markMiller.calcBMI() > johnSmith.calcBMI())
  console.log(`${markMiller.firstName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.firstName}'s (${johnSmith.bmi}).`);
else console.log(`${johnSmith.firstName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.firstName}'s (${markMiller.bmi}).`);
