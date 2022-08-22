/*
write a function countConstruct(target, wordBank) that accepts a target string and an array
of strings.

The function should return the number of ways that the `target` can be constructed by
concatinating elements of the `wordBank` array.

You may reuse elements of the wordBank as many times as needed.
*/

const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === '') return 1;

    let count = 0;
    for(let word of wordBank){
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const waysOfRest = countConstruct(suffix, wordBank, memo);
            count += waysOfRest;
        }
    }

    memo[target] = count;
    return memo[target];
}


console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
 ["e",
 "eee",
 "eeee",
 "eeeee",
 "eeeeee",
 "eeeeeee"])) // 0
