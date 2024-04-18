// Creating Objects with Object Literals

/*
Object literals are the simplest way to create objects in JavaScript.
You can define an object with properties and values inside curly braces { }.
*/

// Example: Creating an object with object literal
var car = {
  "make": "Tesla",
  "model": "Model X",
  "year": 2020,
  "color": "White",
};

console.log(car.make); // Output: Tesla
console.log(car["model"]); // Output: Model

// Creating Objects by Instantiating Object Directly

/*
You can also create objects by instantiating the Object constructor directly using the new keyword.
Properties can be added to the object using dot notation or bracket notation.
*/

// Example: Creating an object by instantiating Object directly
var person = new Object();
person.name = "Alice";
person.age = 30;

console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 30

// Creating Objects with Object Constructor Function

/*
Another way to create objects is by using an object constructor function.
You define a function with arguments, and use the this keyword to assign values to the object properties.
*/

// Example: Creating an object with object constructor function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

var myBook = new Book("JavaScript Basics", "John Doe", 150);
console.log(myBook.title); // Output: JavaScript Basics
console.log(myBook.author); // Output: John Doe
