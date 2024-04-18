// 01_objects.js
// Objects in JavaScript

/*
Objects in JavaScript are a fundamental part of the language that allow you to store and organize data.
They are like containers that can hold multiple properties and methods.
Objects are defined with curly braces { }, and properties are written as key-value pairs.
*/

// Creating an object using object literal syntax
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Accessing object properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// Modifying object properties
person.age = 35;
console.log(person.age); // Output: 35

// Adding new properties to an object
person.occupation = "Developer";
console.log(person.occupation); // Output: Developer

// Deleting properties from an object
delete person.city;
console.log(person.city); // Output: undefined

// Looping through object properties using a for...in loop
for (let key in person) {
  console.log(key + ": " + person[key]);
} // for more info on loops check the loops directory
// Output:
// name: John
// age: 35
// occupation: Developer

// Property naming rules in JavaScript
/*It is not necessary to put quotation marks in keys of JavaScript objects, unless the key is not a valid identifier (e.g., it contains spaces or it is a reserved word). Quotes can be omitted if the property name is a numeric literal or a valid identifier name. Here are some examples:*/

// Valid identifier name as key (no quotes needed):
var someObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Numeric literal as key (no quotes needed):
var someObject = {
  1: "one",
  2: "two",
  3: "three"
};

// Key with spaces or special characters (requires quotes):
var someObject = {
  "first name": "John",
  "last name": "Doe",
  "age in years": 30
};

// Key as a reserved word (requires quotes):
var someObject = {
  "for": "loop",
  "if": "condition",
  "break": "statement"
};

/* In general, it is a good practice to use valid identifier names as keys and avoid using spaces or special characters that would require quotes. This makes the code more readable and maintainable. */