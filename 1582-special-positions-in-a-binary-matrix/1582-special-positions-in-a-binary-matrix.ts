function numSpecial(mat: number[][]): number {
    const n = mat.length, m = mat[0].length
    let result = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(mat[i][j] === 1) {
                let special: boolean = true
                //check row and col
                for(let k = 0; k < n; k++) {
                    if(mat[k][j] !== 0 && k !== i) {
                        special = false
                        break
                    }
                }

                for(let k = 0; k < m; k++) {
                    if(mat[i][k] !== 0 && k !== j) {
                        special = false
                        break
                    } 
                }

                if(special) result++
            }
        }
    }

    return result
};