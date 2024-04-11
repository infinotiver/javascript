// 07_indexing.js
/**
 * Indexing (strings)
 * This code snippet demonstrates how to access characters in a string and
 * get the last character.
 */

// Declare a string variable
var MyStr = "Lorem Ipsum";

/**
 * Accessing the first character of the string using indexing.
 * Indexing in JavaScript starts from 0.
 */
var first_letter = MyStr[0];

/**
 Accessing the second character of the string using indexing.
 */
var second_letter = MyStr[1];

/**
 * Strings are immutable in JavaScript, you cannot modify a
 * specific character at a given index.
 */

/**
 * Getting the last character of the string.
 * The length of a string in JavaScript is zero-based, hence the indexing
 * starts from 0 and the last character is at index length - 1.
 */
var myVar = "Programs";
var LastLetter = myVar[myVar.length - 1];

