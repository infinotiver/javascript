// challenge.js

/*
Write a program that takes a string and calculates the number of vowels, consonants, and digits in the string. It should also calculate the sum of all the numbers in the string.
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

   for(var i = 0; i <= str.length; i++) {
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

var myStr = countVowelsAndConsonants("hello124")
console.log(myStr)
