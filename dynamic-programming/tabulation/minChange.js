/* Write a function, minChange(coins, amount), that accepts an array of coin values
and a target amount as arguments. The method should the minimum number of coins needed
to make the target amount. A coin value can be used multiple times.

You've seen this problem before with memoization, but now solve it using the Tabulation
strategy!

*/

function minChange(coins, amount) {
  let table = new Array(amount + 1).fill(Infinity);
  table[0] = 0;

  coins.forEach((val) => {
    for (let amt = 0; amt < table.length; amt++) {
      for (let qty = 0; qty * val <= amt; qty++) {
        let remainder = amt - qty * val;
        let attempt = table[remainder] + qty;
        if (attempt < table[amt]) {
          table[amt] = attempt;
        }
      }
    }
  });

  return table[table.length - 1];
}

console.log(minChange([1, 2, 5], 11)); // => 3, because 5 + 5 + 1 = 11
console.log(minChange([1, 4, 5], 8)); // => 2, because 4 + 4 = 8
console.log(minChange([1, 5, 10, 25], 15)); // => 2, because 10 + 5 = 15
console.log(minChange([1, 5, 10, 25], 100)); // => 4, because 25 + 25 + 25 + 25 = 100
