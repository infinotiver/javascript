/**
 * 08_typeof.js
 *
 * This file demonstrates the use of the typeof operator to find
 * the data type of variables.
 */

// Use typeof to find data type of variables

// Strings
console.log("'Hello' \n\t TYPE: ", typeof "Hello"); // "string"
console.log("'12' \n\t TYPE: ", typeof "12"); // "string"

// Numbers
console.log("100 \n\t TYPE: ", typeof(100)); // "number"
console.log("100.29 \n\t TYPE: ", typeof(100.29)); // "number"

// Booleans
console.log("true \n\t TYPE: ", typeof true); // "boolean"
console.log("(1 == 2) \n\t TYPE: ", typeof(1 == 2)); // "boolean"

// Undefined
console.log("undefined \n\t TYPE: ", typeof undefined); // "undefined"

var init;
console.log("init \n\t TYPE: ", typeof init); // "undefined"

// Null
console.log("null \n\t TYPE: ", typeof null); // "object"
var initObject = null;
console.log("initObject \n\t TYPE: ", typeof initObject);  // "object"

// Objects
console.log("{name: \"Dinosaur\", extinct: true} \n\t TYPE: ", typeof {name: "Dinosaur", extinct: true}); // "object"


// Arrays
var sampleArray = [];
console.log("sampleArray \n\t TYPE: ", typeof sampleArray);  // "object"
console.log("['JavaScript', 'jQuery', 'Angular'] \n\t TYPE: ", typeof ["JavaScript", "jQuery", "Angular"]);  // "object"
console.log("['Infinotiver', 'India'] \n\t TYPE: ", typeof ["Infinotiver", "India"]);  // "object"

// Functions
console.log("function() \n\t TYPE: ", typeof function(){}); // "function"
console.log("console.log \n\t TYPE: ", typeof console.log); // "function"

// Symbol
console.log("Symbol('dob') \n\t TYPE: ", typeof Symbol("dob")); // "symbol"

