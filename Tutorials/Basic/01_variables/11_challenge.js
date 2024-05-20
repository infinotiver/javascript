// 11_challenge.js

/*
Challenge: Compound Variables Calculator

Objective: Create a program that uses all types of variables (number, string, boolean) and performs compound assignment operations on them.

Instructions:

- Declare and initialize a variable of each type.
- Use compound assignment operators to modify these variables.
- Print the results after each operation.

Files to Reference: 01A_compound_assignment.js, 01_variables.js, 02_declare_intialize.js, 03_string_vars.js
*/

let myNum = 20;
let myStr = "Hello";
let myBool = false;

// Number operations

myNum += 5; 
console.log(myNum) // Output : 25

myNum -= 3; 
console.log(myNum) // Output: 22

myNum *= 2; 
console.log(myNum) // Output: 44

myNum /= 4; 
console.log(myNum) // Output: 11

myNum %= 4; 
console.log(myNum) // Output: 3

// String operations

myStr += " World";
console.log(myStr)

// Boolean operations
myBool &&= false;        
console.log("After &&= false, bool:", myBool); // Output: false

myBool ||= true;        
console.log("After ||= true, bool:", myBool); // Output: true