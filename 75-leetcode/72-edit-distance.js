/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length,
    n = word2.length
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0))

  dp[0][0] = 0 //để chuyển từ 0 ký tự sang 0 ký tự cần 1 phép toán

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        //k cần thực hiện phép toán nào
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        /**
         * Nếu 2 ký tự khác nhau chúng ta có 3 lựa chọn:
         * Thay thế: thay word[i - 1] = word2[j - 1] chi phí là 1 và cộng với dp[i-1][j-1]
         * Xóa: xóa word[i - 1] sau đó chuyển i ký tự đầu word1 thành j ký tự đầu word2 chi phí là 1 + dp[i - 1][j]
         * Chèn: chèn word2[j - 1] vào cuối word1(sau i ký tự đầu) sau đó cần chuyển i ký từ đầu của word1 chi phí 1 + dp[i][j - 1] 
         */
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}

/**
 * Yêu cầu convert từ word1 sang word2 với các quy tắt thêm sửa xóa;
 * Gọi dp[i][j] là phép toán tối thiểu để chuyển đổi i kí tự word1 -> j ký tự word 2
 * kích thước dp là m+1 * n+1
 *
 * CT truy hồi:
 *
 */
