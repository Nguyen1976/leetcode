function maximumAmount(coins: number[][]): number {
    const n = coins.length, m = coins[0].length;
    const K = 2; // max 2 neutralize
    const dp: number[][][] = Array.from({length: n}, () =>
        Array.from({length: m}, () => Array(K + 1).fill(-Infinity))
    );

    // start
    if (coins[0][0] >= 0) {
        for (let k = 0; k <= K; k++) dp[0][0][k] = coins[0][0];
    } else {
        dp[0][0][0] = coins[0][0]; // ko neutralize
        if (K >= 1) dp[0][0][1] = 0; // neutralize
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = 0; k <= K; k++) {
                if (i === 0 && j === 0) continue;

                let candidates: number[] = [];

                // từ trên
                if (i > 0) {
                    let prev = dp[i-1][j];
                    if (coins[i][j] >= 0) candidates.push(prev[k] + coins[i][j]);
                    else {
                        candidates.push(prev[k] + coins[i][j]); // ko neutralize
                        if (k > 0) candidates.push(prev[k-1]); // neutralize
                    }
                }

                // từ trái
                if (j > 0) {
                    let prev = dp[i][j-1];
                    if (coins[i][j] >= 0) candidates.push(prev[k] + coins[i][j]);
                    else {
                        candidates.push(prev[k] + coins[i][j]); // ko neutralize
                        if (k > 0) candidates.push(prev[k-1]); // neutralize
                    }
                }

                dp[i][j][k] = Math.max(...candidates, dp[i][j][k]);
            }
        }
    }

    return Math.max(...dp[n-1][m-1]);
}
