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

// Compound Assignment

// Declare four variables named a, b, c, and d and assign them the values 15, 1, 9, and 6, respectively
let a = 15;
let b = 1;
let c = 9;
let d = 6;

/**
 * Recommended way to perform compound assignment
 * Add 5 to the value of a
 */
a += 5;

/**
 * Subtract the value of b from 10 and assign the result to b
 */
b = -10; // -= also works

/**
 * Multiply the value of c by 5 and assign the result to c
 */
c *= 5; // or =*

/**
 * Divide the value of d by 2 and assign the result to d
 */
d /= 2; // or =/
