// Variables Types : -
// Number: floating point numbers
// String: Sequence of characters
// Boolean: true & false
// Undefined: Value taken by a variable that is not defined yet.
// null: Also means empty value
// Symbol (ES2015): Value that is unique and cannot be changed
// BigInt (ES2020): Larger range integer than Number

// variable
// let firstName = 'John';
// let lastName = 'Doe';
// let $wallet = 35.56;
// let age = 27;
// let height = 5.5;
// let isAdult = true;
// let unDef;
// let isNull = null;
// console.log(firstName + ' ' + lastName);
//
// // constants
// const PI = 3.14;
// console.log(PI);

/***********    Basic Operators    */
// const currentYear = 2023;
// const ageJohn = currentYear - 1997;
// const ageMark = currentYear - 1992;
// let sampleSum = 25 + 25;
//
// // short hand +
// sampleSum += 50;
//
// // short hand -
// sampleSum -= 10;
//
// // short hand *
// sampleSum *= 2;
//
// // short hand /
// sampleSum /= 9;
//
// // post increment & decrement
// sampleSum++;
// sampleSum--;
//
// // pre increment & decrement
// ++sampleSum;
// --sampleSum;
//
// console.log("Age of John is: " + ageJohn);
// console.log("Age of Mark is: " + ageMark);
// console.log("Sample sum: " + sampleSum);
//
// // Comparison operators > < >= <=
//
// const marks = prompt("Enter marks: ");
//
// if(marks > 80){
//     console.log("Grade A");
// } else if(marks >= 60 && marks <= 79){
//     console.log("Grade B");
// } else if(marks >= 40 && marks <= 59){
//     console.log("Grade C");
// } else if(marks >= 30 && marks < 40){
//     console.log("Grade D");
// } else {
//     console.log("Failed");
// }
/***********    Basic Operators End    */

/***********    CHALLENGE #1    */
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
//
// const BMIMark = massMark / (heightMark ** 2);
// const BMIJohn = massJohn / (heightJohn ** 2);
//
// console.log(BMIMark);
// console.log(BMIJohn);
//
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);
/***********    CHALLENGE #1 END    */

/***********    STRINGS & TEMPLATE LITERALS    */
// const firstName = 'John';
// const job = 'Developer';
// const birthYear = 1997;
// const currentYear = 2023;
//
// const description = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!" ;
// const descriptionNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
//
// console.log(description);
// console.log(descriptionNew);
//
// console.log("String with\n multiple \n lines");
/***********    STRINGS & TEMPLATE LITERALS END    */

/***********    IF ELSE STATEMENTS    */
// const age = prompt("Please enter your age: ");
// const name = prompt("Please enter your name: ");
//
// if(age >= 18){
//     console.log(`${name} can start driving.`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`${name} is too young. Wait another ${yearsLeft} years.`);
// }
/***********    IF ELSE STATEMENTS END    */

/***********    CODING CHALLENGE #2    */
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
//
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
//
// if(BMIJohn > BMIMark){
//     console.log("John's BMI is higher than Mark's!");
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// } else {
//     console.log("Mark's BMI is higher than John's!");
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// }
/***********    CODING CHALLENGE #2 END    */

/***********    TYPE CONVERSION & COERCION    */

// manual type conversion
// const inputYear = '1997';
// console.log(inputYear + 81);            // Output: 199781
// console.log(Number(inputYear) + 81);    // Output: 2078
// console.log(Number('Str'));     // Cannot convert string into number
// console.log(String(23),23);      // 23 but in string
//
// // type coercion
// console.log('I am ' + 26 + ' years old');
// console.log(`I was born in ${inputYear}`);
// console.log('23' - '10' - 3);   // 10 But with only subtraction, multiplication, division and modulo
// console.log('23' + '10' + 3);   // Not possible with addition it will create string
// console.log('2' * 2);
// console.log('4' ** 3);
// console.log('50' / 5);
// console.log('49' % 2);      // Type coercion works in all these cases except addition
/***********    TYPE CONVERSION & COERCION END    */

/***********    TRUTHY AND FALSY VALUES    */
// 5 falsy values : 0,'',undefined, null, NaN
// console.log(Boolean(0));            // false
// console.log(Boolean(undefined));    // false
// console.log(Boolean(''));           // false
// console.log(Boolean({}));           // true
// console.log(Boolean('Dushyant'));   // true
// console.log(Boolean(NaN));   // false
//
// // type coercion for truth & falsy values
// let money = 0;
// if(money){
//     console.log(`Don't spend it all`);
// } else {
//     console.log(`You should get a job.`);
// }
/***********    TRUTHY AND FALSY VALUES END    */

/***********    EQUALITY OPERATORS == VS ===    */

// const age = 18;
// if(age === 18) console.log(`You just became an adult :) (strict)`);
// if(age == 18) console.log(`You just became an adult :) (loose)`);   // Avoid to use this one

// const favNum = Number(prompt(`What's your favorite number?`));
// if(isNaN(favNum)){
//     console.log('Invalid number. Please enter number only!');
// } else {
//     if(favNum === 7){
//         console.log(`${favNum} is a cool number`);
//     } else {
//         if(favNum !== 23){
//             console.log(`Why not 23 ?`);
//         }
//         console.log(`${favNum} is not a cool number`);
//     }
// }

// Program to print a table
// const num = Number(prompt(`Enter a number: `));
// printTable(num);
//
// function printTable(num){
//     if(isNaN(num)){
//         alert(`Please enter a valid number`);
//     } else {
//         for (let i = 1; i <= 10; i++){
//             console.log(`${num} * ${i} = ${num * i}`);
//         }
//     }
// }

/***********    EQUALITY OPERATORS == VS === END    */

/***********    LOGICAL OPERATORS    */

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = true;
//
// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log(`You are able to drive!`);
// } else {
//     console.log(`Someone else should drive`);
// }

/***********    LOGICAL OPERATORS END    */

/***********    CODING CHALLENGE 3    */

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
//
// if(scoreKoalas > scoreDolphins){
//     console.log(`Koalas win the trophy`);
// } else if(scoreDolphins > scoreKoalas){
//     console.log(`Dolphins win the trophy`);
// } else {
//     console.log(`Both win the trophy`);
// }

/***********    CODING CHALLENGE 3 END    */

/***********    SWITCH STATEMENT    */

// const day = 'monday';
//
// switch (day) {
//     case 'monday':
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code examples.`);
//         break;
//     case 'friday':
//         console.log(`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend`);
//         break;
//     default:
//         console.log(`Invalid day`);
// }

/***********    SWITCH STATEMENT END    */

/***********    TERNARY OPERATOR    */
// const age = 26;
// age >= 18 ? console.log(`I would like to drink beer.`) : console.log(`I would like to drink water.`);
// console.log(`I like to drink ${age >= 18 ? 'Beer' : 'Juice'}`);
// const drink = age >= 18 ? 'Beer' : 'Juice';
/***********    TERNARY OPERATOR END    */

/***********    CODING CHALLENGE 4    */
const bill = 275;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
/***********    CODING CHALLENGE 4 END    */



