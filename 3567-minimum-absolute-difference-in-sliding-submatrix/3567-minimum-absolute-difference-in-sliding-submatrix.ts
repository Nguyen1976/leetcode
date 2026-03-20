function minAbsDiff(grid: number[][], k: number): number[][] {
    const m = grid.length, n = grid[0].length
    const ans: number[][] = Array.from({length: (m - k + 1)}, () => (Array(n - k + 1).fill(0)))
    for(let i = 0; i < m - k + 1; i++) {
        for(let j = 0; j < n - k + 1; j++) {
            const temp = []
            for(let g = i; g < i + k; g++) {
                for(let h = j; h < j + k; h++) {
                    temp.push(grid[g][h])
                }
            }

            temp.sort((a, b) => a - b)

            let minDiff = Infinity
            for(let t = 1; t < temp.length; t++) {
                if(temp[t] !== temp[t - 1])
                    minDiff = Math.min(minDiff, temp[t] - temp[t - 1])
            }

            ans[i][j] = minDiff === Infinity ? 0 : minDiff
        }
    }

    return ans
};

/**
hãy tính chênh lệch tuyệt đối tối thiểu giữa hai giá trị phân biệt bất kỳ trong ma trận con đó.
trả về 2D array với size này m-k+1 * n-k+1 trong đó ans[i][j] là chênh lệch tuyệt đối nhỏ nhất trong ma trận con có góc trên cùng bên trái là (i, j) trong lưới.
Ma trận con (x1, y1, x2, y2) là ma trận được hình thành bằng cách chọn tất cả các ô ma trận[x][y] trong đó x1 <= x <= x2 và y1 <= y <= y2.

Tức ta cần duyệt toàn bộ các submatrik k*k trong grid
mỗi lần duyêt sẽ tìm ra diff
kết quả lưu trong answer
 */