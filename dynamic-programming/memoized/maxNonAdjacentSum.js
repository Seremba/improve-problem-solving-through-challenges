/*
Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
The function should return the maximum sum of elements in the array we can get if we cannot
take adjacent elements into the sum.

Try to solve this in two ways, using tabulation and memoization.
*/

function maxNonAdjacentSum(nums, memo = {}) {
  if (nums.length === memo) return memo[nums.length];
  if (nums.length === 0) return 0;

  let firstEl = nums[0];
  memo[nums.length] = Math.max(
    firstEl + maxNonAdjacentSum(nums.slice(2), memo),
    maxNonAdjacentSum(nums.slice(1), memo)
  );

  return memo[nums.length];
}

console.log(maxNonAdjacentSum([2, 7, 9, 3, 4])); // => 15, because 2 + 9 + 4
console.log(maxNonAdjacentSum([4, 2, 1, 6])); // => 10, because 4 + 6
