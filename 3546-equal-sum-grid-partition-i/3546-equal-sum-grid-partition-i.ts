function canPartitionGrid(grid: number[][]): boolean {
    const n = grid.length, m = grid[0].length
    let total = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            total += grid[i][j]
        }
    }

     // Cắt ngang
    let sumRows = 0;
    for (let i = 0; i < n - 1; i++) { // phải cắt trước hàng cuối cùng
        sumRows += grid[i].reduce((a, b) => a + b, 0);
        if (sumRows * 2 === total) return true;
    }

    // Cắt dọc
    let sumCols = new Array(m).fill(0);
    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            sumCols[j] += grid[i][j];
        }
    }

    let cumSumCols = 0;
    for (let j = 0; j < m - 1; j++) { // phải cắt trước cột cuối cùng
        cumSumCols += sumCols[j];
        if (cumSumCols * 2 === total) return true;
    }

    return false;
};