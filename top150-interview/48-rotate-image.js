/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    //Chuyển vị ma trận tức là hàng thành cột và cột thành hàng
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for(let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};