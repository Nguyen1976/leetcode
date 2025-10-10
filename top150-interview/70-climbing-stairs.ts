function climbStairs(n: number): number {
  if (n <= 1) {
    return 1
  }

  let dp = new Array(n + 1).fill(-1)
  return climbStairsHelper(n, dp)
}

function climbStairsHelper(n: number, dp: number[]): number {
  if (n <= 1) return 1
  if (dp[n] !== -1) return dp[n]

  dp[n] = climbStairsHelper(n - 1, dp) + climbStairsHelper(n - 2, dp)
  return dp[n]
}
