/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array(text1.length).fill(0)
  let longest = 0

  for (const c of text2) {
    let curLength = 0
    for (let i = 0; i < dp.length; i++) {
      if (curLength < dp[i]) {
        curLength = dp[i]
      } else if (c === text1[i]) {
        dp[i] = curLength + 1
        longest = Math.max(longest, curLength + 1)
      }
    }
  }

  return longest
}

/**
 * Đề bài
 * Cho 2 string text1, text2.
 * Hãy tìm ra chuỗi con dài nhất của text1, text2
 * Đặt dp[i][j] là chuỗi con dài nhất của text[0->i] và text[0->j]
 * Nhưng bài toán có thể giải theo d1
 */
