/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n === 0) return 0
    if(n === 1 || n === 2) return 1

    let dp = new Array(n + 1)

    dp[0] = 0
    dp[1] = 1
    dp[2] = 1

    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
    }
    
    return dp[n]
};

/**
 * T0 = 0, T1 = 1, T2 = 1 and Tn+3 = Tn + Tn+1 + Tn+2
 * Bài toán yêu cầu tính Tn
 * 
 * Với cách thông thường tức là đệ quy thuần sẽ bị time limit
 * lên dùng dp-d1 để có thể lưu trạng thái của bài toán
 */