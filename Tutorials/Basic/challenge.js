// challenge.js

/*
Challenge 1 : Write a program that takes a string and calculates the number of vowels, consonants, and digits in the string. It should also calculate the sum of all the numbers in the string.
*/

// Solution

function countVowelsAndConsonants(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let consonants = [
        "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
        "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"
    ];
   let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
   let vowel_count = 0;
   let consonant_count = 0;
   let digit_count = 0;
   let digit_sum = 0

   for(var i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
        vowel_count++
    }
    else if (consonants.includes(str[i])) {
        consonant_count++
    }
    else if (digits.includes(str[i])) {
        digit_count++
        digit_sum += Number(str[i])
    }
   }
   return {vowel_count, consonant_count, digit_count, digit_sum}
}

var myStr = countVowelsAndConsonants("hello world")
console.log(myStr)

/*
Challenge 2 : Write a program that takes a string as input and counts the number of times each character appears in the string. The program should print out the character and the number of times it appears, in descending order of frequency.
*/
/*
HINTS
You can use a loop (e.g. a for loop) to iterate over each character in the input string.
You can use an object to keep track of the frequency of each character. You can initialize the object with each character as a key and a value of 0, and then increment the value each time you encounter that character in the loop.
You can use the Object.entries() method to convert the object into an array of key-value pairs, which you can then sort based on the value (frequency).
You can use a loop to iterate over the sorted array of key-value pairs and print out each character and its frequency.
*/

function FrequencyCount(str) {
    str = str.toLowerCase()
    frequency = {
    }
    for (var i = 0; i <= (str.length-1); i ++) {
        if (frequency[str[i]]) {
            frequency[str[i]] ++
        }
        else  {
            frequency[str[i]] = 1
        }
    }
    sortedfrequency = Object.entries(frequency).sort(
        function(a, b) {
            return b[1] - a[1]
        }
    )
    for (let j = 0; j < sortedfrequency.length; j++) {
        console.log(`${sortedfrequency[j][0]}: ${sortedfrequency[j][1]}`);
    }
}

FrequencyCount("People hate cheese")

/*
Challenge 3:  Write a program that takes a string as input and checks if it is a valid parentheses string. A valid parentheses string is one where every opening parenthesis ( has a corresponding closing parenthesis ), and every closing parenthesis ) has a corresponding opening parenthesis (. The program should also calculate the length of the longest valid parentheses substring in the string and print it out.
*/



function findLongestValidParentheses(s) {
    let maxLen = 0; // Maximum length of valid parentheses substring
    let validParenthesesCount = 0; // Count of valid parentheses pairs
    let stack = [-1]; // Stack to store indices, initialize with -1 for base calculation

    for (let i = 0; i < s.length; di++) {
        if (s[i] === '(') {
            stack.push(i); // Push the index of '(' onto the stack
        } else if (s[i] === ')') {
            if (stack.length > 1 && s[stack[stack.length - 1]] === '(') {
                stack.pop(); // Pop the matching '(' index from the stack

                // Calculate the length of the current valid substring
                let currentLen = i - stack[stack.length - 1];
                maxLen = Math.max(maxLen, currentLen);

                // Increment valid parentheses count for each valid pair
                validParenthesesCount++;
            } else {
                stack.push(i); // Push the current index as the base for next valid substring
            }
        }
    }

    return {
        longestValidLength: maxLen,
        validParenthesesCount: validParenthesesCount
    };
}

// Example usage
const input = "a-b(a+b)"; // Sample input string
const result = findLongestValidParentheses(input); // Call the function with the input string
console.log(result)
