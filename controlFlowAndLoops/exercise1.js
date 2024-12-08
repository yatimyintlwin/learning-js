let nums = [1, 12, 5, 4, 9, 5];

let result = nums.map(function (n) {
  if (n === 5) n += 10;
  return n;
});

console.log(result);
