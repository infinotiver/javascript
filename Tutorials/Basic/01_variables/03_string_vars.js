// 03_string_vars.js

// Declaring and initializing first name and last name
var firstName = "Max";
var lastName = "Barry";

// Concatenating strings
/* Concatenating refers to linking two things together, in JavaScript, concatenation of strings simply means to link any two strings together.
For example:
    const fullSentence = "This is sentence 1" + "This is Sentence 2"
*/
var fullName = firstName + " " + lastName;

// Concatenating strings using template literals
var fullNameTemplate = `${firstName} ${lastName}`; // PREFERRED 
// Concatenating strings (EASIER)
var fullName = firstName + " " + lastName;

// Adding sentences to a string
var myStr = "First sentence";
myStr += " Second sentence will be concatenated";

// Finding length of string
var myStrLength = myStr.length;
console.log(myStrLength);
