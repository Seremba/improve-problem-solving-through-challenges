/* Complete the function/method so that it returns the url with anything
after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// function removeUrlAnchor(url){
//     // TODO: complete
//     let words = url.split('.')
//     for(let i = 0; i < words.length; i++){
//       let word = words[i];
//       if(word.includes('#')){
//          sliceWord(word);
//       }
//     }
//   }

  function sliceWord(word) {
      let newWord = '';
      for(let i = 0; i < word.length; i++){
          let char = word[i];
          if(char === '#'){
               console.log(word.replace('#', '').slice(i))
          }
      }
  }


  sliceWord("com#about");
