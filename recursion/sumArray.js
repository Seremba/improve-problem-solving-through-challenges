/* Write a function, sumArray(array), that takes in an array of numbers.
The function should return the total sum of the elements.

Solve this recursively!
*/

function sumArray(array) {
  if (array.length === 0) return 0;

  let firstEl = array[0];
  let remaining = array.slice(1);
  return firstEl + sumArray(remaining);
}

console.log(sumArray([])); // => 0
console.log(sumArray([5])); // => 5
console.log(sumArray([5, 2])); // => 7
console.log(sumArray([4, 10, -1, 2])); // => 15
