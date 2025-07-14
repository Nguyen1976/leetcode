/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let coordinateOfZeros = []

  //O(n * m)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) coordinateOfZeros.push([i, j])
    }
  }

  //O(k * (m + n))
  for (let [row, column] of coordinateOfZeros) {
    let i = 1
    while (
      column + i < matrix[0].length ||
      column - i >= 0 ||
      row + i < matrix.length ||
      row - i >= 0
    ) {
      if (column + i < matrix[0].length) matrix[row][column + i] = 0
      if (column - i >= 0) matrix[row][column - i] = 0
      if (row + i < matrix.length) matrix[row + i][column] = 0
      if (row - i >= 0) matrix[row - i][column] = 0
      i++
    }
  }
}

/**
    Tìm tọa độ của zero trong matrix
 */
