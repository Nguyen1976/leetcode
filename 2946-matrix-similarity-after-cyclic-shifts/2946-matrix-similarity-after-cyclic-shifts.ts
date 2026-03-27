function areSimilar(mat: number[][], k: number): boolean {
    const n = mat.length, m = mat[0].length
    //cần 1 hàm check row đó sau k lần left ship thì có về chỗ cũ k
    const check = (i: number) => {
        const temp: number[] = Array(m).fill(0)
        for(let j = 0; j < m; j++) {
            temp[j] = mat[i][(j + k) % m]
        }

        //check sim
        for(let j = 0; j < m; j++) {
            if(temp[j] !== mat[i][j]) return false
        }

        return true
    }

    let result = true
    for(let i = 0; i < n; i++) {
        if(!check(i)) {
            result = false
            break
        }
    }

    return result
};

//cần xác định row 