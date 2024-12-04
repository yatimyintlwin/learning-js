let nums = [1, 2, 3];
let alphas = ["a", "b", "c"];
let result = [nums, alphas];

console.log(result);

// using spread operator
let resultForSpreadOperator = [...nums, ...alphas];

console.log(resultForSpreadOperator);

let four = [...nums, 4];
console.log(four);

let zero = [0, ...nums];
console.log(zero);
