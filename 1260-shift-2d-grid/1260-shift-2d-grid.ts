function shiftGrid(grid: number[][], k: number): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;

    // k có thể lớn hơn tổng số phần tử
    k %= total;

    // Flatten grid
    const arr = grid.flat();

    // Lấy k phần tử cuối đưa lên đầu
    const shifted = [
        ...arr.slice(total - k),
        ...arr.slice(0, total - k)
    ];

    // Chuyển lại thành matrix
    const result: number[][] = [];

    for (let i = 0; i < m; i++) {
        result.push(
            shifted.slice(i * n, (i + 1) * n)
        );
    }

    return result;
}