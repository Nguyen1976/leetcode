function isValidSudoku(board: string[][]): boolean {
    const rows: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));
    const cols: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));
    const boxes: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                const num = board[i][j].charCodeAt(0) - "1".charCodeAt(0);
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                    return false;
                }

                rows[i][num] = cols[j][num] = boxes[boxIndex][num] = true;
            }
        }
    }
    return true;
}