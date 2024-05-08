const prompt = require("prompt-sync")();
function checkPrime(num) {
    if (num < 0 || num == 1) {
        return false
    }
    let i = 2;
    const myNum = Math.floor(num / 2) + 1; // Divide by 2 and round down
    for (i; i < myNum; i++) {
        
        if (num % i === 0) {
            return false;
        }
    }
    console.log(`${num} is prime`);
    return true;
}
let userInp;
let maxIterations = 10; // or any other number you like
let i = 0;
while (userInp !== 0 && i < maxIterations) {
    userInp = parseInt(prompt("Enter number (or 0 to stop) "));
    if (userInp !== 0) {
        console.log(checkPrime(userInp));
    }
    i += 1;
}


