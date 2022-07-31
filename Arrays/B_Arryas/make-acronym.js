/*
 Write a function `makeAcronym` that accepts a sentence string as an
 argument. The function should
 return a string containing the first character of each word in the
 sentence.
*/

let makeAcronym = function(sentence){
  let words = sentence.split(" ");
  let newWordsArray = [];
  for(let i = 0; i < words.length; i++){
      let word = words[i];
      let upperCaseChar = word[0].toUpperCase();
      newWordsArray.push(upperCaseChar);
  }

 return newWordsArray.join("")
};
console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS
