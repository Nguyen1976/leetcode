function maxPathScore(grid: number[][], k: number): number {
    const n = grid.length, m = grid[0].length
    const dp: number[][][] = Array.from({length: n}, () => Array.from({length: m}, () => Array(k + 1).fill(-Infinity)))

    const startCost = grid[0][0] === 0 ? 0 : 1; //track tri phí phải trả cho ô đầu tiền vì đó là nơi bắt buộc
    if (startCost <= k) {
        dp[0][0][startCost] = grid[0][0];
    }
     for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (let c = 0; c <= k; c++) {

                const cost = grid[i][j] === 0 ? 0 : 1;
                const score = grid[i][j];

                if (i === 0 && j === 0) continue;

                if (c < cost) continue;//chỉ bắt đầu từ start cost chính là tại i j vì đó là nơi bắt buộc đi qua lên c k thể nhỏ hơn start cost được

                let best = -Infinity;

                if (i > 0) {
                    best = Math.max(best, dp[i - 1][j][c - cost]);
                }

                if (j > 0) {
                    best = Math.max(best, dp[i][j - 1][c - cost]);
                }

                //muốn check tới i j với tônnr cost là c thì phải lấy c - cost hiện tại thì chính là cost trước đó tức kiểm tra 2 trường hợp l ftruowcs đó lựa chọn phải hay xuống

                if (best !== -Infinity) {
                    dp[i][j][c] = best + score;//tổng của best trước đó nếu đi xuống hoặc phải với score hiện tại
                }
            }
        }
    }

     const res = Math.max(...dp[n - 1][m - 1]);//rải trường hợp các cost ra
    return res === -Infinity ? -1 : res;
};
/*
bắt đầu 0, 0 góc trên bên trái
kết thúc tại gọc dưới bên phải
mục tiêu đạt được score lớn nhất
chỉ được xuống hoặc sang phải

sử dụng dp 3 chiều với 3 trạng thái i j c
và tại dp[i][j][c] =. max tại điểm i j vàtotle cost = c
và c <= k
quan trọng chỉ có k cost để đi được đến cuối và đi làm sao để có được score lớn nhất mà cost k vượt quá k



*/