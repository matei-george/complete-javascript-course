"use strict";
// Object
const matt = {
  firstName: "Matei",
  lastName: "Murarasu",
  birthYear: 2001,
  job: "Front-End Engineer",
  friends: ["1", "2", "3"],
  hadDriversLicence: false,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hadDriversLicence ? "a" : "no"} drivers licence.`;
  },
};
console.log(matt);

// Getting properties from objects
// Dot method
console.log(matt.lastName);
console.log(matt["lastName"]);

const nameKey = "Name";
console.log(matt["first" + nameKey]);
console.log(matt["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Matt? Choose between firstName, lastName, age, job and friends");

// if (matt[interestedIn]) console.log(matt[interestedIn]);
// else console.log(`This property does not exist`);

matt.location = "Romania";
matt["twitter"] = "@oFFGRId";
console.log(matt);

// Challenge
console.log(`Matt has ${matt.friends.length} friends and his best friend is ${matt.friends[0]}`);

// Object methods
console.log(matt.calcAge());
// console.log(matt["calcAge"](2001));
console.log(matt.getSummary());
