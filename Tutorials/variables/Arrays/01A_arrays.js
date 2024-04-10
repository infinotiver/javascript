// 01A_arrays.js

/* 
ARRAYS
This is a comment block that explains what arrays are and how they are used.

Arrays are a data structure that can store multiple pieces of data in one place. 
They are defined by using square brackets, [ ], and always start and end with one of these brackets.

The data in an array can be of any type, including numbers, strings, and even other arrays.
*/

// Declaring a simple array
// This line declares an array variable named "myArray"
// The array is then initialized with several pieces of data

var myArray // Variable declaration
var myArray = ["Computer", 0, 1, 19.5] // Variable initialization

// Nested Arrays
// This block declares a variable named "nestedArray"
// The array is then initialized with two sub-arrays

var nestedArray // Variable declaration
var nestedArray = [ // Variable initialization
    // The first sub-array has three pieces of data
    ["My Info", 15, "Name"],
    // The second sub-array has four pieces of data
    ["Computers", "Binary", 0, 2]
]

// Indexing Arrays
// Indexing is like looking up data in an array by its position

// Simple Arrays
// We are looking up the first piece of data in the "myArray" array
var indexedArray1 = myArray[0]

// Nested Arrays
// We are looking up the third piece of data in the first sub-array of the "nestedArray" array
var indexedArray2 = nestedArray[0][2]


