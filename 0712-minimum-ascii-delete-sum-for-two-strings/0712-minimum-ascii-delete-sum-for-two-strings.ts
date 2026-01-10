function minimumDeleteSum(s1: string, s2: string): number {
    const n = s1.length
    const m = s2.length

    const dp: number[][] = Array.from({length: n + 1}, () => Array(m + 1).fill(0))

    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] =
                    dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
            } else {
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    dp[i][j - 1]
                );
            }
        }
    }

    let sum1 = 0;
    let sum2 = 0;

    for (const c of s1) sum1 += c.charCodeAt(0);
    for (const c of s2) sum2 += c.charCodeAt(0);

    return sum1 + sum2 - 2 * dp[n][m];
};