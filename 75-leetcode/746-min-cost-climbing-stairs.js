/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  const dp = new Array(n + 1)

  dp[0] = 0
  dp[1] = 0

  for(let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[n]
}

/**
 * Cho 1 mảng cost
 * Và mỗi lần sẽ được leo 1 đến 2 bước đến khi nòa hết mảng cost mà hết ít tiền nhất
 * trả về min
 *
 * Ý tưởng 1: dùng greedy sẽ k được vì nó chỉ thực hiện tốt nhất ở mỗi trường hợp thì xét về tổng thẻ sẽ k tối ưu
 * Ý tưởng 2: sử dụng dp-d1
 * Gọi dp[i] là chi phí tối thiểu để đến được i
 * dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 1] + cost[i - 2])
 * tức là chi phí tối thiếu để đến i là min của chi phí tối thiểu để đến i - 1 và phí để bươcs lên bậc i - 1 tổng lại sẽ là tổng chi phí để đến bậc i - 1 rồi 1 bước lên bậc 1 bới vì mảng dp là lưu chi phí để đến được chứ chưa phải là chi phí bước lên
 * Vậy lên dp tại n là chi phí đến đến bậc n thì tức là nó đang đứng ở bậc i
 */
