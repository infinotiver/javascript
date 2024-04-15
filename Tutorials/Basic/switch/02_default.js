// 01_switch_statements.js
/*
Sometimes, we can't define every case, that is where default comes handy.
default:
  something
means that if none of the above conditions are satisfied, then the default case will be executed.

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
  default: // Defining the default case
    console.log('Unknown fruit');
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
  // Add cases for the remaining months
  default:
    monthName = 'Invalid month number';
}

console.log(`The month is ${monthName}`);