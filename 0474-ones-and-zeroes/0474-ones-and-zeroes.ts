function findMaxForm(strs: string[], m: number, n: number): number {
    let dp: number[][] = Array.from({length: m + 1}, () => Array(n + 1).fill(0))

    for(let s of strs) {
        let zeros = s.split('').filter(c => c === '0').length
        let ones = s.length - zeros

         // Duyệt ngược để tránh ghi đè dữ liệu trước đó
        for(let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                // Nếu chọn chuỗi s -> dp[i - zeros][j - ones] + 1
                // Nếu không chọn -> dp[i][j]
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
            }
        }
    }

    return dp[m][n]
};

/**
Yêu cầu: tìm ra tập con lớn nhất sao cho tổng ký tự 0 nhỏ hơn m và tổng ký tự 1 nhớ hơn n

ở bài này ta sẽ sử dụng dp 2 chiều
dp[i][j] số chuỗi tối đa có thể chọn nếu ta có i số 0 và j số 1

kết quả sẽ nằm ở dp[m][n]
 */