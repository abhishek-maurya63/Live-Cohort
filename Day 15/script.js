// Ask Age

// let age = Number(prompt("What is your age?"));

// if (age >= 18 && age < 60) {
//   console.log("You are adult");
// } else {
//   console.log("You are a senior citizen.");
// }

// Odd or Even Sum

// let num1 = Number(prompt("enter the Num 1"));
// let num2 = Number(prompt("enter the Num 2"));

// if ((num1 + num2) % 2 == 0) {
//   console.log("Even sum");
// } else {
//   console.log("Odd sum");
// }

// **** character case checker

// let char = prompt("Enter the character");

// if (char === char.toUpperCase) {
//   console.log("upper case");
// } else if (char === char.toLowerCase) {
//   console.log("Lower case");
// } else {
//   console.log("Not a letter");
// }

// Largest of three numbers

// let num1 = prompt("Enter the first num");
// let num2 = prompt("Enter the second num");
// let num3 = prompt("Enter the third num");

// if (num1 > num2 && num1 > num3) {
//   console.log("Num 1 is largest", num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Num 2 is largest", num2);
// } else {
//   console.log("Num 3 is largest", num3);
// }

// check leap year

let year = prompt("Enter the year");

if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) {
  console.log(year, " is leap year");
} else {
  console.log("Not a leap year");
}
