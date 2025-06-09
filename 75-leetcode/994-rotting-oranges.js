/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let step = 0
  const queue = [] //chứa vị trí cam thối

  //tìm vị trí cam thối đầu tiên
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col])
      }
    }
  }

  if (queue.length === 0) return grid.some(row => row.includes(1)) ? -1 : 0

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  while (queue.length > 0) {
    let size = queue.length//lấy size hiện tạ
    let infected = false//đánh dấu xem đã bị lây nhiễm chưa

    while (size--) {//để chỉ lặp ở phút hiện tại
      const [row, col] = queue.shift()

      for (const [dx, dy] of directions) {//các bước di chuyển
        const newRow = row + dx
        const newCol = col + dy

        if (//kiểm tra hợp lệ
          newRow >= 0 &&
          newRow < grid.length &&
          newCol >= 0 &&
          newCol < grid[0].length &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2
          queue.push([newRow, newCol])
          infected = true
        }
      }
    }

    if (infected) step++
  }

  //Nếu vẫn tìm thấy quả lành
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        return -1
      }
    }
  }

  return step
}

//Đề bài
/**
 * cho ma trận grid m*n
 * số 0 đại diện cho 1 ô trống
 * số 1 đại diện cho quả cam tươi
 * số 2 đại diện cho quả cam hỏng
 * cứ mỗi phút thì tất cả những quả cam liền kề nó sẽ bị thối
 * trả về số phút mà tất cả cam đều bị thối
 * Nếu có 1 quả cam tách biệt và k thể bj thối thf trả về -1
 */

/**
 * Ý tưởng:
 * bắt đầu từ quả cam thối đầu tiên chúng ta sẽ duyệt rộng
 * mỗi bước duyệt rộng sẽ là 1 phút
 * khi duyệt xong mà vẫn tồn tại cam thối thì sẽ trả về -1
 * nguyên tắc mở rộng ra tứ phía là [row, col +- 1], [row +- 1, col]
 */

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
)
