let userName = "gio";
let userAge = 19;
let isStudent = true;
let myNull = null;
let myNan = NaN;
let myUndefined;

console.log(typeof userName, typeof userAge, typeof isStudent, typeof myNull, typeof myNan, typeof myUndefined);

let myName = "giorgi";
let myHobby = "playing";
let yearOfBirth = 2002;
let currentYear = 2022;

console.log(typeof myName, typeof myHobby, typeof yearOfBirth, typeof currentYear);

console.log("My name is " + myName + "," + " I am " + (currentYear - yearOfBirth) + " years old and my hobby is " + myHobby);

let myTextEcample = `My name is ${myName}, I am ${currentYear - yearOfBirth} years old and my hobby is ${myHobby}.`;

console.log(myTextEcample);
