/*
 Write a function named `stringRepeater(str, num)` that accepts a string
 and a number as arguments.The function should return a new string
 consisting of the `str` repeated `num` number of times.
*/

let stringRepeater = function(str, num){
    let newString = '';
    for(let i = 0; i < num; i++){
        newString += str;

    }
    return newString
}
console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'
