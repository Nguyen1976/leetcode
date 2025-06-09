/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = 1e9 + 7

  if (n === 1) return 1
  if (n === 2) return 2

  let dp = new Array(n + 1).fill(0)

  dp[0] = 1
  dp[1] = 1
  dp[2] = 2

  let sum = 1
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + 2 * sum) % MOD
    sum = (sum + dp[i - 2]) % MOD
  }

  return dp[n]
}

/**
 * Đề bài:
 * Ta có 2 loại gạch: 2x1 là domino và tromino kiểu như hình chữ L. Bạn có thể xoay những hình dạng này.
 * Trả lại số cách để xếp các hình domino và tromino đầy 1 bảng 2*n
 *
 * Ý tưởng:
 * Gọi dp[n] là số cách lát kín bảng 2*n
 * Với domino thì có thể đặt 2 cái đứng  chiếm 2*1 cột i
 * Hoặc đặt 1 dommino hằng ngang chiếm 1 hàng ở 2 cột liên tiếp
 *
 * Với tromino có thể lấp đầy 1 phần hình chữ L kết hợp với trạng thái trước đó
 *
 * Công thức quy hoạch động:
 * dp[0] = 1, dp[1] = 1, dp[2] = 2
 * Ta có công thức: dp[n] = dp[n - 1] + dp[n - 2] + 2 * sum(dp[0]...dp[n - 3])
 */
