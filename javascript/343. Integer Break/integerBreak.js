// Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

// Return the maximum product you can get.

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: n = 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(1);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      if (i + j <= n) {
        const x = Math.max(dp[i], i);
        const y = Math.max(dp[j], j);

        dp[i + j] = Math.max(x * y, dp[i + j]);
      }
    }
  }
  return dp[n];
};
