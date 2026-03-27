function areSimilar(mat: number[][], k: number): boolean {
    const n = mat.length, m = mat[0].length
  
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(mat[i][(j + k) % m] !== mat[i][j]) return false
        }
    }

    return true
};

//cần xác định row 