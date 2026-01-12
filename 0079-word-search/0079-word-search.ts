function exist(board: string[][], word: string): boolean {
    const rows = board.length
    const cols = board[0].length

    const backtrack = (r, c, index) => {
        if(index === word.length) return true
        if (r < 0 || r >= rows || c < 0 || c >= cols) return false
        if (board[r][c] !== word[index]) return false

        const temp = board[r][c]
        board[r][c] = '#'//đánh dầu để trong nhánh tiếp theo khi sử dụng cái board này sẽ k được
        
        const found = backtrack(r + 1, c, index + 1) ||
            backtrack(r - 1, c, index + 1) ||
            backtrack(r, c + 1, index + 1) ||
            backtrack(r, c - 1, index + 1)

        //backtrack
        board[r][c] = temp
        return found
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (backtrack(i, j, 0)) return true
        }
    }

    return false
};