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

/***********    TYPE CONVERSION & COERCION END    */


