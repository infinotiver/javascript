// 03_string_vars.js

// Declaring and initializing first name and last name
var firstName = "Pranjal";
var lastName = "Prakarsh";

// Concatenating strings
var fullName = firstName + " " + lastName;

// Concatenating strings using template literals
var fullNameTemplate = `${firstName} ${lastName}`;
// Concatenating strings (EASIER)
var fullName = firstName + " " + lastName;

// Adding sentences to a string
var myStr = "First sentence";
myStr += " Second sentence will be concatenated";

// Finding length of string
var myStrLength = myStr.length;
console.log(myStrLength);
