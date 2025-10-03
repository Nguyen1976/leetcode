function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length,
    n = matrix[0].length
  let leftRow = 0,
    rightRow = m - 1
  while (leftRow <= rightRow) {
    let midRow = Math.floor((leftRow + rightRow) / 2)

    if (matrix[midRow][0] > target) {
      rightRow = midRow - 1
    } else if (matrix[midRow][n - 1] < target) {
      leftRow = midRow + 1
    } else {
      //Thực hiện tìm kiếm trong này và trả về kết quả luôn
      let leftCol = 0,
        rightCol = n - 1
      while (leftCol <= rightCol) {
        let midCol = Math.floor((leftCol + rightCol) / 2)

        if (matrix[midRow][midCol] > target) {
          rightCol = midCol - 1
        } else if (matrix[midRow][midCol] < target) {
          leftCol = midCol + 1
        } else {
          return true
        }
      }
      return false
    }
  }

  return false
}

/**
    Ý tưởng sẽ là tìm hàng mà số nằm trước bằng cách duyệt qua từng hàng 
    và chỉ cần kiểm tra phần từ đầu cuối của mỗi hàng là sẽ biết được phần tử có nằm ở trong 2 không
    nhưng như vậy sẽ là O(m + log(n))

    Vậy sẽ phải dùng tìm kiếm nhị phân lên cả cột và hàng
 */
