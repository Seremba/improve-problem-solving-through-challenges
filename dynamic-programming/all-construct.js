/*
write a function allConstruct(target, wordBank) that accepts a target string and an array
of strings.

The function should return a 2D array, conatining `all of the ways` that the target can be
constructed concatenating elements of the wordBank array. Each element of the 2D array
should represent one combination that constructs the target.

You may reuse elements of the wordBank as many times as needed.
*/

const allConstruct = (target, wordBank) => {
    if(target === '') return [[]];

    let result = [];
    for(let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
}


console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 ["e",
 "eee",
 "eeee",
 "eeeee",
 "eeeeee",
 "eeeeeee"])) // []
