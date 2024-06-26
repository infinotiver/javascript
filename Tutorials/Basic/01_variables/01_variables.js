// 01_variables.js

/**
 * Variables and Data Types
 *
 * Variables are used to store data. Variables can be declared without
 * assigning a value, but it's recommended to always assign a value.
 *
 * JavaScript has six data types:
 * - undefined
 * - null
 * - boolean
 * - string
 * - symbol
 * - number
 * - object
 *
 * Data types are case-sensitive in JavaScript.
 */

/*
The let Keyword
ES6 introduces the new let keyword for declaring variables. Prior to ES6, the only way to declare a variable in JavaScript was the var keyword. 

* Variables declared with the var keyword are function-scoped & can be hoisted at the top within its scope
* Variables declared with let keyword are block-scoped ({}) & they are not hoisted
*/

// Declare and assign a variable named myName with a string value "Someone"
let myName = "Someone";

// Reassign the value of myName to "Infinotiver"
myName = "Infinotiver";

// Declare and assign a constant named myAge with a value of 13
const myAge = 13;

// Declare and assign a constant named pi with the approximate value of pi
const pi = 3.141; // Constants never change

// Declare and assign a variable named decimal with a float value of 1.5
let decimal = 1.5;

