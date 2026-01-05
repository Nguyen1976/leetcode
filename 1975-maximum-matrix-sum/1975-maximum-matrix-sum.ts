function maxMatrixSum(matrix: number[][]): number {
    let numberOfNegative = 0
    let numberOfZero = 0
    let n = matrix.length

    let sumAbs = 0
    let minAbs = Infinity

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const val = matrix[i][j]

            if (val < 0) numberOfNegative++
            if (val === 0) numberOfZero++

            const absVal = Math.abs(val)
            sumAbs += absVal
            minAbs = Math.min(minAbs, absVal)
        }
    }

    // Nếu có số âm lẻ và không có số 0
    if (numberOfNegative % 2 !== 0 && numberOfZero === 0) {
        return sumAbs - 2 * minAbs
    }

    return sumAbs
}



/**
có thể chọn 2 phần tử liền kề và nhân với -1 
mục đích tạo ra tổng lớn nhất
nếu phần tử có lượng số âm là chẵn => luôn biến đổi được về hết -1
nếu là số lẻ thì sẽ chọn ra 1 phần tử là âm lớn nhất tức tiến gần về 0 hoặc bằng 0 để chọn làm phần tử k biến đổi

 */