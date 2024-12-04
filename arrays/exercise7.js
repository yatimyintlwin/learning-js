function add(a, b) {
  return a + b;
}

let nums = [123, 456];
console.log(add(nums[0], nums[1]));

// Function call with array spread
console.log(add(...nums));
