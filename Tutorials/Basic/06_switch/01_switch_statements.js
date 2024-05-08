// 01_switch_statements.js
/*
A switch statement in JavaScript is used to perform different actions based on different conditions. It evaluates an expression, then matches the expression's value to a case clause, and executes the statements associated with that case. If no case matches, an optional default case can be executed. This allows for cleaner and more concise code when dealing with multiple possible conditions.
*/
let fruit = 'Apple';

switch(fruit) {
  case 'Banana':
    console.log('Banana is a yellow fruit');
    break;
  case 'Apple':
    console.log('Apple is a red fruit');
    break;
  case 'Orange':
    console.log('Orange is an orange fruit');
    break;

}

// EXAMPLE
let monthNumber = 2;
let monthName;

switch(monthNumber) {
  case 1:
    monthName = 'January';
    break;
  case 2:
    monthName = 'February';
    break;
  case 3:
    monthName = 'March';
    break;

}

console.log(`The month is ${monthName}`);