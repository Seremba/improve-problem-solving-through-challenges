// https://leetcode.com/problems/coin-change-ii/

function change(amount, coins, memo = {}) {
  let key = amount + "-" + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;

  let currentCoin = coins[coins.length - 1];

  let total = 0;
  for (let qty = 0; qty * currentCoin <= amount; qty++) {
    total += change(amount - qty * currentCoin, coins.slice(0, -1), memo);
  }

  memo[key] = total;
  return memo[key];
}

console.log(change(500, [3, 5, 7, 9, 11]));
