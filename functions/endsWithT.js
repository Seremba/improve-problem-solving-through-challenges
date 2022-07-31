// Write a function `endsWithT` that accepts a string as an argument.
// The function should return a
// boolean indicating whether or not the string ends with the character 't'.
let endsWithT = function(str){

    if(str[str.length - 1] === 't'){
        return true;
    }
    return false;
}
console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false
