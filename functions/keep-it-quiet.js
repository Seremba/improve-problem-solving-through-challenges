// Write a function `keepItQuiet` that accepts a string as an argument.
// The function should return the
// lowercase version of the string with 3 periods added to the end of it.

let keepItQuiet = function(str){
    let islowerCase = str.toLowerCase();
    return islowerCase + '...'
}
console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'
