const score = 400;
// console.log(score);

const balance = new Number(400); // Used to when we explicitly want to declare a number
//     console.log(balance);
//         console.log(balance.toString().length); // converted to string
//         console.log(balance.toFixed(2)); // use to prcision value after points

const NumberOne = 433.2947;
//     console.log(NumberOne.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.98));
console.log(Math.ceil(4.98)); // USe top while roundoff
console.log(Math.floor(4.98)); // USe below while roundoff

console.log(Math.sqrt(25));
console.log(Math.min(4, 3, 6, 8));

console.log(Math.random()); // Always b/w 0,1

console.log(Math.random() * 10); // to get desired type we can add mul
console.log(Math.random() * 10 + 1); // We add 1 to avoid 0
console.log(Math.floor(Math.random() * 10 + 1)); // to round off the value

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

// here min & max was defined suppose you making ludo game so we can use this.
