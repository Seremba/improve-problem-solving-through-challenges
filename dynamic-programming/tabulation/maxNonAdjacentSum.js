/*
Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
The function should return the maximum sum of elements in the array we can get if we cannot
take adjacent elements into the sum.

Try to solve this in two ways, using tabulation and memoization.
*/

function maxNonAdjacentSum(nums) {
  let table = new Array(nums.length).fill(0);
  table[0] = nums[0];

  for (let i = 1; i < table.length; i++) {
    let skipLeftNeighbor = table[i - 2] === undefined ? 0 : table[i - 2];
    let includeThisnum = skipLeftNeighbor + nums[i];
    let notIncludeThisNum = table[i - 1];
    table[i] = Math.max(includeThisnum, notIncludeThisNum);
  }

  return table[nums.length - 1];
}

console.log(maxNonAdjacentSum([2, 7, 9, 3, 4])); // => 15, because 2 + 9 + 4
console.log(maxNonAdjacentSum([4, 2, 1, 6])); // => 10, because 4 + 6
