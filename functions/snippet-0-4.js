let exclaim = function(str){
    let capitalized = str.toUpperCase();
    return capitalized + "!!!"
}

let result = exclaim("potato");
console.log(result); // POTATO!!!
console.log(result.length); // 9
console.log(result[0]); // P
console.log(result[result.length - 1]); // !
