function numMagicSquaresInside(grid: number[][]): number {
    let row = grid.length
    let col = grid[0].length

    let res = 0

    for(let i = 0; i < row - 2; i++) {
        for(let j = 0; j < col - 2; j++) {
             if (grid[i + 1][j + 1] !== 5) continue
            let set = new Set()
            for (let r = i; r < i + 3; r++) {
                for (let c = j; c < j + 3; c++) {
                    const val = grid[r][c]
                    if (val < 1 || val > 9) break
                    set.add(val)
                }
            }
            if(set.size !== 9) continue

            const s = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]

            // 3 hàng
            if (
                grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] !== s ||
                grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2] !== s
            ) continue

            // 3 cột
            if (
                grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] !== s ||
                grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2] !== s
            ) continue

            // 2 đường chéo
            if (
                grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] !== s ||
                grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j] !== s
            ) continue

            res++
        }
    }

    return res
};

//tìm cách lặp qua tất cả các sub matrix 3*3 của 1 matrix

/**
lặp qua các điểm và chọn nó là là điểm 0,0 góc trên bên trái của submatrix
mỗi điểm sẽ cần check xem điểm cuối hợp lệ k nếu k thì có thể bỏ qua

giả dụ ta có điểm 0, 0 thì điểm kết thúc của hàng là 0, 2 cột là 2, 0 và góc là 2,2

 */