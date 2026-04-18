function transpose(matrix: number[][]): number[][] {
    const n = matrix.length, m = matrix[0].length
    const newMatrix = []

    for(let i = 0; i < m; i++) {
        const temp = []
        for(let j = 0; j < n; j++) {
            temp.push(matrix[j][i])
        }
        newMatrix.push(temp)
    }

    return newMatrix
};