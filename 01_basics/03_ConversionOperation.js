let score = "Satvik";
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof valueInNumber)
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let IsLoggedIn = 1;

let BooleanIsLoggedIn = Boolean(IsLoggedIn);
console.log(BooleanIsLoggedIn);

// 1 => true
// 0 => false
// "Satvik" => true

let someNumber = 22;

let StringNumber = String(someNumber);
console.log(StringNumber);
console.log(typeof StringNumber);

// ***************************OPERATIONS*************************************

let value = 3;
let negvalue = -value;

/*
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%3);
*/

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);  ** If string is in start then everything is treated as string.
// console.log(1 + "2");  **If string is in last then first it will perform operation then.
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2"); *These are good for questions in exam but is bad practice.

// console.log( (3 + 4) * 5 % 3); *Use this insttead

// console.log(+true);
// console.log(+"");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

/*
# If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

# If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

*/

let x = 3;
const y = x++;
console.log(y, x); // x is 4; y is 3

let a = 3;
const b = ++a;
console.log(b, a); // x is 4; y is 4
