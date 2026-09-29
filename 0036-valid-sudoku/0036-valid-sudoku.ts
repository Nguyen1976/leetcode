function isValidSudoku(board: string[][]): boolean {
    //check row
    for(let i = 0; i < 9; i++) {
        const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
        for(let j = 0; j < 9; j++) {
            let num = board[i][j]
            if(num === '.') continue
            if(set.has(num)) {
                set.delete(num)
            } else {
                return false
            }
        }
    }

    for(let i = 0; i < 9; i++) {
        const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
        for(let j = 0; j < 9; j++) {
            let num = board[j][i]
            if(num === '.') continue
            if(set.has(num)) {
                set.delete(num)
            } else {
                return false
            }
        }
    }

    for(let i = 0; i < 9; i += 3) {
        for(let j = 0; j < 9; j += 3) {
            const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
            for(let k = 0; k < 3; k++) {
                for(let h = 0; h < 3; h++) {
                    let num = board[i + k][j + h]
                    if(num === '.') continue
                    if(set.has(num)) {
                        set.delete(num)
                    } else {
                        return false
                    }
                }
            }
        }
    }
    

    return true
};