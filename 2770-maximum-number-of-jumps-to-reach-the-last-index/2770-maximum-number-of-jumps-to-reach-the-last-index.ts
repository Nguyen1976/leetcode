function maximumJumps(nums: number[], target: number): number {
    const n = nums.length
    const dp = Array(n).fill(-Infinity)

    dp[0] = 0

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j]

            if(-target <= diff && diff <= target) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return dp[n - 1] === -Infinity ? -1 : dp[n - 1]
}

/**
điều kiện nhảy, 1 bước mình có thể nhảy từ i -> j với điều kiện
i < j
-target <= nums[j] - nums[i] <= target
sử dụng bfs 
có queue lưu trữ theo dạng [vị trí hiện tại, các bước đã sử dụng]

 */