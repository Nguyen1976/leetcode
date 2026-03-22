function findRotation(mat: number[][], target: number[][]): boolean {
    const rotate = (matrix: number[][]): number[][] => {
        const n = matrix.length
        const rotated = Array.from({ length: n }, () => Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                rotated[j][n - 1 - i] = matrix[i][j];//công thức rotate
            }
        }

        return rotated;
    }
    let curr = mat

    if(JSON.stringify(curr) === JSON.stringify(target)) return true

    for (let i = 1; i < 4; i++) {
        curr = rotate(curr);
        if (JSON.stringify(curr) === JSON.stringify(target)) return true;
    }

    return false;


};

/**
Ví dụ với ma trận 2x2 chúng ta rotate 3 lần tức 4 trạng thái
3x3 là 8 rotate với 9 trạng thái
 */