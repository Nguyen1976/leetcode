function maxProductPath(grid: number[][]): number {
    const m = grid.length, n = grid[0].length
    const MOD = 1e9 + 7

    const Min: number[][] = Array.from({length: m}, () => Array(n).fill(Infinity))
    const Max: number[][] = Array.from({length: m}, () => Array(n).fill(-Infinity))

    Min[0][0] = Max[0][0] = grid[0][0]

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (i === 0 && j === 0) 
                continue;

            let mn = Infinity;
            let mx = -Infinity;

            if (i > 0) {
                const a = Min[i-1][j] * grid[i][j];
                const b = Max[i-1][j] * grid[i][j];
                mn = Math.min(mn, a, b);
                mx = Math.max(mx, a, b);
            }

            if (j > 0) {
                const a = Min[i][j-1] * grid[i][j];
                const b = Max[i][j-1] * grid[i][j];
                mn = Math.min(mn, a, b);
                mx = Math.max(mx, a, b);
            }

            Min[i][j] = mn;
            Max[i][j] = mx;
        }
    }

    const res = Max[m-1][n-1];
    return res >= 0 ? res % MOD : -1;
};

