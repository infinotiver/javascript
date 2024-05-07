// mySolution.js

/*
1. Write a javascript function named is_integer which checks if the passed argument is an integer. You can use any mathematical operator or functions defined in the Math object.
*/

function is_integer(num) {
    if (num % 1 === 0) {
        return true;
    } else {
        return false;
    }
}
const myNum = 11
// const myNum = 11.05
console.log(myNum)
console.log(is_integer(myNum))

/*
2. Using the forEach function defined for an array, find the sum of the array of numbers. [function add_all(arr) {...}]
*/

const MyArr = [1, 2, 3, 4]

function add_all(arr){
    let sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    return sum;
}

console.log(add_all(MyArr))
/*
3. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]
*/

function convert(temperature, type) {
    // 0 --> to celsius 
    // 1 --> to fahrenheit
    if (type=0) {
        return (temperature - 32) * 5/9;
    }
    else if (type=1) {
        return (temperature * 9/5) + 32;
    }
}

const temperature = 23
console.log(temperature)
console.log(convert(temperature, 1))

/*
4. Write a factorial function that returns the factorial of a given number, n. Make sure you return the calculated value and not just print it. [function factorial(n){...}]
*/

function factorial (n) {
    if (n === 0) {
        return 1
    }
    else {
        return n * factorial(n-1)
    }

}

console.log(factorial(3))

/*
5. Write a javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). [function convert_to_coins(amount) {...}]. You may choose to print the coin denominations used on the console. E.g. convert_to_coins(87) should print 25 25 25 10 2.
*/

function convert_to_coins(amount) {
    console.log(`Converting ${amount} to coins`);
    let myDenominations = [1, 2, 5, 10, 25];
    let coins = {
        1: 0,
        2: 0,
        5: 0,
        10: 0,
        25: 0
    };
    let remainingAmount = amount;
    myDenominations.reverse()
    for (let i = 0; i < myDenominations.length; i += 1) {
        const currentDenomination = myDenominations[i];
        const numCoins = Math.floor(remainingAmount / currentDenomination);

        coins[currentDenomination] += numCoins;
        remainingAmount -= numCoins * currentDenomination;
    }
    // Check for remaining amount
    if (remainingAmount > 0) {
        console.log(`Amount cannot be converted exactly using given denominations`);
        return "Amount cannot be converted exactly using given denominations";
    }

    return coins;
}

console.log(convert_to_coins(129))