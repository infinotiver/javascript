// 09_type_conversion.js
/**
 * Type Conversion in JavaScript
 */

// String to Number
/*
* The global method Number() converts a variable (or a value) into a number.
* A numeric string (like "3.141") converts to a number (like 3.141).
* An empty string (like "") converts to 0.
* A non numeric string (like "John") converts to NaN (Not a Number).
*/
let strNum = "123";
let numFromStr = Number(strNum); // convert string to number
console.log(numFromStr); // 123

// Number to String
let num = 456;
let strFromNum = String(num); // convert number to string
console.log(strFromNum); // "456"

// Boolean to Number
let bool = true;
let numFromBool = Number(bool); // convert boolean to number
console.log(numFromBool); // 1

// Number to Boolean
let num2 = 0;
let boolFromNum = Boolean(num2); // convert number to boolean
console.log(boolFromNum); // false

// String to Boolean
let strBool = "true";
let boolFromStr = Boolean(strBool); // convert string to boolean
console.log(boolFromStr); // true

// Boolean to String
let bool2 = false;
let strFromBool = String(bool2); // convert boolean to string
console.log(strFromBool); // "false"

// Explicit Conversion
let explicitNum = "42";
let explicitNumToNum = parseInt(explicitNum); // explicit conversion to integer
let explicitNumToFloat = parseFloat(explicitNum); // explicit conversion to float
console.log(explicitNumToNum); // 42
console.log(explicitNumToFloat); // 42

// Implicit Conversion
let implicitAddition = 10 + "5"; // implicit conversion to string
let implicitConcatenation = "Result: " + 20; // implicit conversion to string
console.log(implicitAddition); // "105"
console.log(implicitConcatenation); // "Result: 20"

// More implicit conversion methods
// todo 
