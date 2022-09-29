/* Write a function, stepper(nums), that takes in an array of non negative numbers.
Each element of the array represents the maximum number of steps you can take from
that position in the array.
The function should return a boolean indicating if it is possible to travel from the
first position of the array to the last position.

For Example:

Given [3, 1, 0, 5, 10]
     - We begin at first position, 3.
     - Since the element is 3 we can take up to 3 steps from this position.
     - This means we can step to the 1, 0, or 5
     - Say we step to 1
     - Since the element is 1, now the only option is to take 1 step to land on 0
     - etc...

Try to solve this in two ways, using tabulation and memoization.
*/

function stepper(nums) {
  let table = new Array(nums.length).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] == true) {
      let maxRange = nums[i];

      for (let j = 1; j <= maxRange; j++) {
        // i is the current position and j is the step amount so i+j is the new postion
        table[i + j] = true;
      }
    }
  }

  return table[nums.length - 1];
}

// function stepper(nums, memo = {}) {
//   let key = nums.length;
//   if (key in memo) return memo[key];
//   if (nums.length === 0) return true;

//   let maxRange = nums[0];
//   for (let step = 1; step <= maxRange; step++) {
//     if (stepper(nums.slice(step), memo)) {
//       memo[key] = true;
//       return true;
//     }
//   }

//   memo[key] = false;
//   return false;
// }
console.log(stepper([3, 1, 0, 5, 10])); // => true, because we can step through elements 3 -> 5 -> 10
console.log(stepper([3, 4, 1, 0, 10])); // => true, because we can step through elements 3 -> 4 -> 10
console.log(stepper([2, 3, 1, 1, 0, 4, 7, 8])); // => false, there is no way to step to the end
