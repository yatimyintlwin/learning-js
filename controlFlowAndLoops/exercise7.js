let nums = [11, 22, -1, 44];

// with break
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) break;
  console.log(nums[i]);
}

// with continue
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) continue;
  console.log(nums[i]);
}
