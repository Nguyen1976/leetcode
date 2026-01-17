function minCostClimbingStairs(cost: number[]): number {
    const n = cost.length
    let dp = new Array(n + 1)
    dp[0] = cost[0]
    dp[1] = cost[1]

    for(let i = 2; i < n; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    }


    return Math.min(dp[n - 1], dp[n - 2])
};

/**
Phân tích
dp[i] là số tiền nhỏ nhất để leo được lên đến i
ví dụ dp[0] = 1
dp[1] = 100
có 2 cách đố là neo từ bậc 1 hoặc leo từ bậc 0 lên
dp[2] = Math.min(dp[0], dp[1]) + cost[2]

=> dp[n] = Math.min(dp[n - 1] + dp[n - 2]) + cost[n]

 */