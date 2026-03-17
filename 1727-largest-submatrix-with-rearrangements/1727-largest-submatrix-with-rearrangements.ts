function largestSubmatrix(matrix: number[][]): number {
    let m = matrix.length, n = matrix[0].length
    if (m === 0) return 0
    const height = new Array(n).fill(0)
    let result = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            height[j] = matrix[i][j] === 1 ? height[j] + 1 : 0;
        }
        const sorted = [...height].sort((a, b) => b - a)
        for(let k = 0; k < n; k++) {
            result = Math.max(result, sorted[k] * (k + 1))
        }
    }

    return result

};