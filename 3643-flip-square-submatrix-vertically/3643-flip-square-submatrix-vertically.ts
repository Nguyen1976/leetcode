function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
    let top = x
    let bottom = x + k - 1

    while (top < bottom) {
        for (let col = y; col < y + k; col++) {
            [grid[top][col], grid[bottom][col]] = [grid[bottom][col], grid[top][col]]
        }
        top++
        bottom--
    }

    return grid
}
//sort theo cột của submatrix giảm dần