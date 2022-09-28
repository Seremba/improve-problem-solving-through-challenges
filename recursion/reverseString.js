/* Write a function, reverseString(str), that takes in a string.
The function should return the string with it's characters in reverse order.

Solve this recursively!
*/

function reverseString(str) {
  if (str.length === 0) return "";

  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("friends"));
console.log(reverseString("")); // => ""
console.log(reverseString("c")); // => "c"
console.log(reverseString("internet")); // => "tenretni"
console.log(reverseString("friends")); // => "sdneirf"
