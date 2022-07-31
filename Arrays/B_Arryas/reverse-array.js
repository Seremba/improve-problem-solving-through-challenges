/*
 Write a function `reverseArray` that accepts an array as an argument.
 The function should return a
 array containing the elements of the original array in reverse order.
*/

let reverseArray = function(array){
   let newArray = [];

   for(let i = array.length - 1; i >=0; i--){
       let el = array[i];
       newArray.push(el);
   }

   return newArray;
};
console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]
