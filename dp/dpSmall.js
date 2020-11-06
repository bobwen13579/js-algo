const coinChange = function (coins, amount) {
    coins.sort();
    const changes = Array(amount + 1).fill(amount + 1);
    changes[0] = 0;
    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j <= coins.length; j++) {
        const sub = i - coins[j];
        if(sub >= 0) {
          changes[i] = Math.min(changes[i], changes[sub] + 1);
        }
      }
    }
    const res = changes[amount];
    return res === amount + 1 ? -1 : res;
  };
  
  console.log(coinChange([2], 27));
  