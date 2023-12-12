/******** ACTIVATING STRICT MODE **/
'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`I can drive now.`);

// const interface = 'Audio';  // this is a reserved word interface hence we cannot use it here
/******** ACTIVATING STRICT MODE END **/

/******** FUNCTIONS **/
// function logger(msg){
//     console.log(msg);
// }
//
// function fruitProcessor(apples,oranges){
//     return `Juice with ${apples} apples and ${oranges} oranges.`;
// }
//
// // Calling, running or invoking a function
// // logger('From a function');
// // logger('Hello world');
//
// const appleJuice = fruitProcessor(5,0);
// const orangeJuice = fruitProcessor(0,5);
// const appleOrangeJuice = fruitProcessor(3,3);
//
// logger(appleJuice);
// logger(orangeJuice);
// logger(appleOrangeJuice);
/******** FUNCTIONS END **/

/************** FUNCTION DECLARATION & EXPRESSION **/

// Normal function
// function calcAgeOne(birthYear){
//     return 2023 - birthYear;
// }
//
// console.log(calcAgeOne(1997));
//
// // Function expression
// // console.log(calcAgeTwo(1995));  // Cannot call in function expression, Uncaught ReferenceError: Cannot access 'calcAgeTwo' before initialization, because of Hoisting
// const calcAgeTwo = function (birthYear){
//     return 2023 - birthYear;
// }
//
// console.log(calcAgeTwo(1996));
/************** FUNCTION DECLARATION & EXPRESSION END **/

/************** ARROW FUNCTIONS **/
// Example : -
// const calcAge3 = birthYear => 2023 - birthYear;
// const myAge = calcAge3(1996);
// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//
//     if(retirement <= 0){
//         return `${firstName} has already retired.`;
//     } else {
//         return `${firstName} retires in ${retirement} years.`;
//     }
// }
// const myRetirement = yearsUntilRetirement(1997,'Dushyant');
// const retirement2 = yearsUntilRetirement(1955,'Josh');
//
// console.log(myAge);
// console.log(retirement2);
/************** ARROW FUNCTIONS END **/

/************** FUNCTIONS CALLING OTHER FUNCTIONS **/

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
//
// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//
//     return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
// }
//
// console.log(fruitProcessor(2,3));

/************** FUNCTIONS CALLING OTHER FUNCTIONS END **/

/************** CODING CHALLENGE 5 **/

// const calcAvg = (a,b,c) => (a+b+c) / 3;
// console.log(calcAvg(3,4,5));
//
// // test 1
// const scoreDolphins = calcAvg(44,23,71);
// const scoreKoalas = calcAvg(65,54,49);
//
// const checkWinner = function (avgDolphins,avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins Win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if(avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas Win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }
//
// checkWinner(scoreDolphins,scoreKoalas);

/************** CODING CHALLENGE 5 END **/

/************** ARRAYS **/
// const friends = ['Rajesh','Nishchay','Aryan','Anuj'];
// console.log(friends);
//
// // const years = new Array(1991,1992,1996,1997);
// // console.log(years);
//
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
//
// // get length
// console.log(friends.length);
//
// // we can change the value of an array item even if its const, but we cannot replace the entire array
// friends[1] = 'Akash';
// console.log(friends);
//
// const dushyant = ['Dushyant','Vishwakarma',2023 - 1997];
// console.log(dushyant);
//
// // Exercise
// const calcAge = (birthYear) => 2023 - birthYear;
//
// const years = [1991,1995,1997,2000];
//
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);
//
// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length - 1])
// ];
//
// console.log(ages);
/************** ARRAYS END **/

/************** BASIC ARRAY OPERATIONS **/

// const friends = ['Rajesh','Nishchay','Aryan','Anuj'];
//
// // push element to an array
// const newLength = friends.push("Jay");  // returns new length of an array
//
// // shifts element at first position of an array
// friends.unshift("John");
//
// // remove last element from an array
// const popped = friends.pop();   // returns the popped element
//
// // remove first element from array
// friends.shift();
//
// // return an index of array
// console.log(friends.indexOf('Rajesh'));
// console.log(friends.indexOf('Nishchay'));
//
// // includes return true or false if an array contains certain element
// console.log(friends.includes('Rajesh'));
// console.log(friends.includes('Rajeshsss'));
//
// if(friends.includes('Rajesh')){
//     console.log(`You have a friend named Rajesh`);
// }
//
// console.log(friends);
// console.log(popped);

/************** BASIC ARRAY OPERATIONS END **/

/************** ARRAY CHALLENGE **/
// function calcTip(bill){
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }
//
// const bills = [125,555,44];
//
// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[bills.length - 1]);
//
// const tips  = [tip1,tip2,tip3];
// const totals = [
//     bills[0] + tip1,
//     bills[1] + tip2,
//     bills[2] + tip3,
// ];
//
// console.log(tips);
// console.log(totals);

/************** ARRAY CHALLENGE END **/

/************** OBJECTS IN JAVASCRIPT **/
const dushyant = {
  firstName:'Dushyant',
  lastName:'Vishwakarma',
  age:2023 - 1997,
  job:'Developer',
    friends:['Rajesh','Nishchay','John']
};

console.log(dushyant);
/************** OBJECTS IN JAVASCRIPT END **/