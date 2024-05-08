// 04_dot_notation.js

// Accessing Object Properties with Dot Notation
/*
In JavaScript, you can access object properties using dot notation.
Dot notation is a convenient way to retrieve the value of a specific property from an object.
*/

// Example: Accessing object properties with dot notation
var student = {
  name: 'Alice',
  age: 25,
  grade: 'A'
};

console.log(student.name); // Output: Alice
console.log(student.age); // Output: 25
console.log(student.grade); // Output: A

//Using Dot Notation to Call Object Methods

/*
In addition to accessing properties, dot notation can also be used to call object methods.
Methods are functions defined within an object that perform specific actions.
*/

// Example: Using dot notation to call object methods
var person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.fullName()); // Output: John Doe

// Section 7: Dot Notation for Nested Objects

/*
You can also use dot notation to access properties of nested objects.
Nested objects are objects that are properties of another object.
*/

// Example: Accessing properties of nested objects with dot notation
var library = {
  name: 'Local Library',
  address: {
    street: '123 Main St',
    city: 'Your town'
  }
};

console.log(library.name); // Output: Local Library
console.log(library.address.street); // Output: 123 Main St
console.log(library.address.city); // Output: Anytown