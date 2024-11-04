let num = 3;

let isFalse = num > 3 && num < 5;
let isTrue = num < 5 && num === 3;

console.log("The answer is " + isFalse);
console.log(num < 5 && num > 3);
console.log("The answer is " + isTrue);

console.log(num > 3 || num < 5);
console.log(num < 3 || num > 3);
console.log(num < 5 || num === 3);

let x = 3;
let y = 5;

console.log(x < y && y > 5 && x === 3);
console.log(x < y && !(y > 5 && x === 3));
console.log((x < y && y > 5) || x === 3);
