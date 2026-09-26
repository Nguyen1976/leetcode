class NumMatrix {
    constructor(private matrix: number[][] = []) {
        
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0
        for(let i = row1; i <= row2; i++) {
            for(let j = col1; j <= col2; j++) {
                sum += this.matrix[i][j]
            }
        }

        return sum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */