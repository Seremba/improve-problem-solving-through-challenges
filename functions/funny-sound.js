/*
 Write a function `funnySound` that accepts two strings as arguments.
The function should return a new string containing the first three
characters of both strings concatenated together.
You can assume that the arguments are both at least three characters long.
*/
let funnySound = function(str1, str2){
    let str1ThreeChar = str1.slice(0,3);
    let str2ThreeChar = str2.slice(0,3);

    return str1ThreeChar + str2ThreeChar;
}

console.log(funnySound("tiger", "spoon")); // 'tigspo'
console.log(funnySound("computer", "phone")); // 'compho'
console.log(funnySound("skate", "bottle")); // 'skabot'
console.log(funnySound("frog", "ashtray")); // 'froash'
