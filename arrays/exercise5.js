let nums = [1, 2, 3, 4, 5];

//using map
let result1 = nums.map(function (a) {
  return a + 1;
});

console.log(result1);

//using filter
let result2 = nums.filter(function (b) {
  return !(b % 2);
});

console.log(result2);

// with arrow function
let add = nums.map((n) => n + 1);
console.log(add);

let odd = nums.filter((n) => n % 2);
console.log(odd);

//Method Chaning
let result3 = nums.map((n) => n + 2).filter((n) => n % 2);
console.log(result3);

// reduce
let nums2 = [2, 3, 4, 5, 6];
let result4 = nums2.reduce(function (a, n) {
  return a + n;
});
console.log(result4);

//short form
let result = [2, 3, 4, 5, 6].reduce((a, n) => a + n);
console.log(result);
