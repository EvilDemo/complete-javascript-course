/*
const firstName = "Leo";
const job = "designer";
const birthyear = 1993;
sconst year = 2024;

const Leo =
  "I'm " + firstName + ", a" + (year - birthyear) + "year's old " + job + "!";
console.log(Leo);
const leoNew = `i'm ${firstName}, a ${year - birthyear} years old ${job}!`;
console.log(leoNew);

console.log(`string
  multiple
  lines`);


const age = 20;

if (age >= 18) {
  console.log(`Can start driving license 👏🏽`);
} else {
  const yearsLeft = 18 - age;
  console.log(`wait ${yearsLeft} years! 🔒`);
}
 

const birthYear = 2020;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}


const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String);

console.log("i am " + 23 + " years old");

let n = "1" + 1;
n = n - 1;
console.log(n);


const money = 100;
if (money) {
  console.log("dont spend it all");
} else {
  console.log("you should get a job!");
}


const age = 18;
if (age == 18) console.log("you became an adult (strict)");
if (age === 18) console.log("you became an adult (loose)");

const favourite = Number(prompt("whats your favourite number?"));
console.log(typeof favourite);
console.log(favourite);

if (favourite === 23) {
  console.log("cool number");
} else if (favourite === 7) {
  console.log("7 is also good");
} else if (favourite === 9) {
  console.log("9 is still cool");
} else {
  console.log("not a cool number");
}

if (favourite !== 23) console.log("why not 23?");


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("I can drive");
// } else {
//   console.log("someone else should drive");

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("I can drive");
} else {
  console.log("someone else should drive");
}

*/

const day = "monday";
switch (day) {
  case "monday":
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("plan something else");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code");
    break;
  case "friday":
    console.log("record video");
    break;
  case "saturday":
  case "sunday":
    console.log("take a break");
    break;
  default:
    console.log("not a valid day");
}
