// The main difference between let and var is the scope of the variables they declare.
// var declarations are function scoped, meaning that they can be accessed anywhere within the function in which they are declared.
// let declarations are block scoped, meaning that they can only be accessed within the block of code in which they are declared.
// This means that a variable declared with var can be accessed anywhere within the current function or global scope,
// while a variable declared with let can only be accessed within the block it was declared.
//  Here is an example to illustrate the difference:

function myFunction() {
    var x = 1; // var variable is function scoped
    {
        let y = 2; // let variable is block scoped
        console.log(y); // 2
    }
    console.log(y); // ReferenceError: y is not defined
}

myFunction();