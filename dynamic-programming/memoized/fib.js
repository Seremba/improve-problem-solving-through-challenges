/*write a function fib(n) that takes in a number as an argument. The
function should return the n-th number of the fibonacci sequence */

// use memoization, use js object. keys is the fn argument, values are the return value
const fib = (n, memo = {}) => {
  // if the arg is already in the memo, then fetch the value
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  // if the arg is not in the memo, calculate it recursively but save it in the memo for future
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
};

console.log(fib(7));
console.log(fib(5));
console.log(fib(50));
