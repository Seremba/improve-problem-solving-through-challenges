/*
write a function canSum(targetSum, numbers) that takes in target sum and an array of numbers
as arguments.

The function should return a boolean indicating weather or not it is possible
to generate the target sum using numbers from the array.

You may use an element of the array as many times as needed. You may assume that all input
numbers are non negative.
*/

const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;

        if(canSum(remainder, numbers) === true){
            return true;
        }
    }

    return false;
}

console.log(canSum(7, [2, 3])); // false
console.log(canSum(7, [5, 4, 3, 2, 7])); //true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
