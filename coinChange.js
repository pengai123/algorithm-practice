var coinChange = function (coins, amount) {
  var dp = Array(amount + 1).fill(amount + 1);

  if (amount < 0) return -1;
  if (amount === 0) return 0;

  dp[0] = 0;

  for (var i = 1; i <= amount; i++) {
    for (var j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};