function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0
  const dp = Array(nums.length).fill(1)

  dp[0] = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

/**
    khởi tạo mảng dp với dp[i] là số subsequence lớn nhất thu được tại i 
    kết quả là nằm tại dp[nums.length - 1]
 */
