function constructProductMatrix(grid: number[][]): number[][] {
    const n = grid.length;
    const m = grid[0].length;
    const MOD = 12345;

    const dp: number[][] = Array.from({ length: n }, () => Array(m).fill(0));

    let total = 1;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            dp[i][j] = total;
            total = (total * grid[i][j]) % MOD;
        }
    }

    total = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            dp[i][j] = (dp[i][j] * total) % MOD;
            total = (total * grid[i][j]) % MOD;
        }
    }

    return dp;
};