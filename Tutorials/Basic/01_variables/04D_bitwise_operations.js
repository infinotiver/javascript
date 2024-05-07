// Bitwise Operators
/*
Bitwise operators are used to perform operations at the bit level. They work directly on the binary representations of numbers at the bit level. The bitwise operators in JavaScript are:

& (Bitwise AND): Sets each bit to 1 if both bits are 1.
| (Bitwise OR): Sets each bit to 1 if one of the bits is 1.
^ (Bitwise XOR): Sets each bit to 1 if only one of the bits is 1.
~ (Bitwise NOT): Inverts all the bits.
<< (Bitwise Left Shift): Shifts the bits to the left.
>> (Bitwise Right Shift): Shifts the bits to the right, preserving the sign bit.
*/

let num3 = 5; // 101 in binary
let num4 = 3; // 011 in binary
let bitwiseAnd = num3 & num4; // bitwise AND (result: 1)
let bitwiseOr = num3 | num4; // bitwise OR (result: 7)
let bitwiseXor = num3 ^ num4; // bitwise XOR (result: 6)
let bitwiseNot = ~num3; // bitwise NOT (result: -6)
let bitwiseLeftShift = num3 << 1; // bitwise left shift by 1 (result: 10)
let bitwiseRightShift = num3 >> 1; // bitwise right shift by 1 (result: 2)