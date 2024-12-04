let nums = [123, 456];

let a = nums[0];
let b = nums[1];

// Array Destructurig
let [c, d] = nums;

function add([a, b]) {
  return a + b;
}

console.log(add(nums));
