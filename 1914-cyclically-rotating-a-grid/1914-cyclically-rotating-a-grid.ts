function rotateGrid(grid: number[][], k: number): number[][] {
    const m = grid.length, n = grid[0].length
    const layer = Math.ceil(Math.min(m, n) / 2)
    for(let i = 0; i < layer; i++) {
        const width = n - (i * 2)
        const height = m - (i * 2)
        const rotate = k % (((width + height) * 2) - 4)
        for(let r = 0; r < rotate; r++) {
            //swap hàng trước
            for(let j = i; j < n - 1 - i; j++) {
                [grid[i][j], grid[i][j + 1]] = [grid[i][j + 1], grid[i][j]]
            }
            //swap cột cuối
            for(let j = i; j < m - 1 - i; j++) {
                [grid[j][n - 1 - i], grid[j + 1][n - 1 - i]] = [grid[j + 1][n - 1 - i], grid[j][n - 1 - i]]
            }
            //swap hàng cuối
            for(let j = n - 1 - i; j > i; j--) {
                [grid[m - 1 - i][j], grid[m - 1 - i][j - 1]] = [grid[m - 1 - i][j - 1], grid[m - 1 - i][j]]
            }
            //swap cột đầu
            for(let j = m - 1 - i; j > i + 1; j--) {
                [grid[j][i], grid[j - 1][i]] = [grid[j - 1][i], grid[j][i]]
            }
        }
    }

    return grid
};