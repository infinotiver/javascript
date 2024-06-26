// 05_bracket_notation.js

// Accessing Object Properties with Bracket Notation

/*
In JavaScript, you can also access object properties using bracket notation.
Bracket notation allows you to access properties using variables or expressions.
*/

// Example: Accessing object properties with bracket notation
var student = {
  name: 'Alice',
  age: 25,
  grade: 'A'
};

var key = 'name';
console.log(student[key]); // Output: Alice

key = 'age';
console.log(student[key]); // Output: 25

key = 'grade';
console.log(student[key]); // Output: A

// Modifying Object Properties with Bracket Notation

/*
You can also use bracket notation to modify the values of object properties.
*/

var person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

var property = 'firstName';
person[property] = 'Jane';
console.log(person.firstName); // Output: Jane

property = 'age';
person[property] = 35;
console.log(person.age); // Output: 35

var movie = {
  title : "Bahubali",
  director: "S.S. Rajamouli",
  year: 2010
}

movie["year"] = 2019
console.log(movie.year) // Output: 2019
// Adding Object Properties with Bracket Notation
/* You can also use bracket notation to add new properties to an object. */
var person = {
  name: "John",
  age: 10
}

console.log(person.gender) // Output: undefined
person["gender"] = "male"
console.log(person.gender) // Output: male