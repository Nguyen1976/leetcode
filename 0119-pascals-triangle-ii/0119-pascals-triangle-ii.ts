function getRow(rowIndex: number): number[] {
    if(rowIndex === 0) return [1]
    if(rowIndex === 1) return [1, 1]
    let dp = Array(rowIndex + 1).fill(0)
    dp[0] = [1]
    dp[1] = [1, 1]
    dp[2] = [1, 2, 1]
    for(let i = 3; i <= rowIndex; i++) {
        let prev = dp[i - 1]
        let arr = Array(i + 1).fill(1)
        for(let j = 1; j < i; j++) {
            arr[j] = prev[j] + prev[j - 1]
        }
        dp[i] = [...arr]
    }

    return dp[rowIndex] as number[]
};