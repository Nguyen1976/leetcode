function rangeAddQueries(n: number, queries: number[][]): number[][] {
    let matrix = Array.from({length: n}, () => Array.from({length: n}, () => 0))

    for(let query of queries) {
        let [row1, col1, row2, col2] = query

        for(let i = row1; i <= row2; i++) {
            for(let j = col1; j <= col2; j++) {
                matrix[i][j] += 1
            }
        }
    }
    return matrix
};

//0, 0, 2, 2 thí 0 0 là góc trên trái và 2,2 là góc dưới phải 