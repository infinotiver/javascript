// 02_exercise.js
/*
Exercise Question:

Create an object called car that represents a car with the following properties: make, model, year, and color. Initialize the object with some sample values. Then, add a method called startEngine to the car object that logs a message saying "Vroom!" to the console. Finally, call the startEngine method on the car object to see the result.

*/
var car = {
    "make" : "Tesla",
    "model" : "Model X",
    "year" : 2020,
    "color" : "White"
}

function startEngine() {
    console.log("Vroom!");
}
car.startEngine = startEngine

car.startEngine()

// More exercises
/*
Exercise Question 1: Create an object called person with properties for name, age, and city. Initialize the object with some sample values. Then, add a method called greet to the person object that logs a greeting message to the console, including the person's name and city. Finally, call the greet method on the person object to see the result.
*/
console.log("-----------------\n")
person = {
    "name" : "Rose Tyler",
    "age" : 19,
    "city" : "New York"
}

person.greet = function() {
    console.log("Hello, my name is ", person.name, ". I am ", person.age, "years old and I am from ", person.city)
}

person.greet()

/*
Exercise Question 2: Create an object called calculator with methods for basic arithmetic operations such as add, subtract, multiply, and divide. Each method should take two parameters and return the result of the operation. Test the calculator by calling each method with different values and checking the output.
*/
console.log("-----------------\n")
calculator = {
    add : function(a, b) {
        return a + b
    },
    subtract : function(a, b) {
        return a - b
    },
    multiply : function(a, b) {
        return a * b
    },
    divide : function(a, b) {
        return a / b
    }
}
console.log(calculator.add(10, 5))
console.log(calculator.subtract(10, 5))
console.log(calculator.multiply(10, 5))
console.log(calculator.divide(10, 5))
/*
Exercise Question 3: Create an object called book with properties for title, author, and pages. Initialize the object with some sample values. Then, add a method called displayInfo to the book object that logs information about the book, including the title, author, and number of pages. Finally, call the displayInfo method on the book object to see the result.
*/
console.log("-----------------\n")
book = {
    title : "The Alchemist",
    author : "Paulo Coelho",
    pages : 320
}

book.displayInfo = function() {
    console.log("Title: ", book.title, "\nAuthor: ", book.author, "\nPages: ", book.pages)
}
book.displayInfo()