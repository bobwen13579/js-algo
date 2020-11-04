// f(n) = f(n - 2) + f(n - 1)
const dp = (num, coins) => {
  if (num === 0) return 0;
  else if (num < 0) return -1;
  let number = Number.MAX_VALUE;
  for (let i = 0; i < coins.length; i ++) {
      const sub = dp(num - coins[i], coins);
      if (sub !== -1) {
        number = Math.min(sub + 1 , number);
      }
  }
  return number;
};

console.log(dp(10, [1,2,5]));