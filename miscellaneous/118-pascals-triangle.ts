function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]]

  let dp = []
  dp[0] = [1]
  dp[1] = [1, 1]

  for (let i = 2; i < numRows; i++) {
    let arr = new Array(i + 1).fill(1)

    for (let j = 1; j < arr.length - 1; j++) {
      arr[j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }

    dp.push(arr)
  }

  return dp
}
