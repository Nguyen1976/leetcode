function countSubmatrices(grid: number[][], k: number): number {
    const n = grid.length, m = grid[0].length
    let result = 0
    const col = new Array(m).fill(0)
    for(let i = 0; i < n; i++) {
        let rowSum = 0
        for(let j = 0; j < m; j++) {
            col[j] += grid[i][j]
            rowSum += col[j]
            if(rowSum <= k) result++
        }
    }

    return result
};

/**
Để giải quyết được bài này thì ta cần xác định cách duyệt ma trận


 */