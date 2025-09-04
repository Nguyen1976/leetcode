/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length
  const cols = board[0].length
  const visited = new Set()
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  const bfs = (r, c) => {
    let q = [[r, c]]
    visited.add(`${r},${c}`)

    while (q.length > 0) {
      let [row, col] = q.shift()
      for ([dx, dy] of directions) {
        let nr = dx + row,
          nc = dy + col
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          board[nr][nc] === 'O' &&
          !visited.has(`${nr},${nc}`)
        ) {
          visited.add(`${nr},${nc}`)
          q.push([nr, nc])
        }
      }
    }
  }
  // hàng đầu và cuối
  for (let j = 0; j < cols; j++) {
    if (board[0][j] === 'O' && !visited.has(`${0},${j}`)) {
      bfs(0, j)
    }
    if (board[rows - 1][j] === 'O' && !visited.has(`${rows - 1},${j}`)) {
      bfs(rows - 1, j)
    }
  }

  // cạnh trái và phải
  for (let i = 0; i < rows; i++) {
    if (board[i][0] === 'O' && !visited.has(`${i},${0}`)) {
      bfs(i, 0)
    }
    if (board[i][cols - 1] === 'O' && !visited.has(`${i},${cols - 1}`)) {
      bfs(i, cols - 1)
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O' && !visited.has(`${i},${j}`)) {
        board[i][j] = 'X'
      }
    }
  }
}

/**
cho 1 matrix m * n chứa các kí tự là 'X' và 'O', nắm bắt các vùng được bao quanh
connect: mỗi tế bào được kết nối liền kề theo chiều ngang và dọc
region: để tạo thành 1 vùng liên kết kết nối với mọi tế bào O
surround: vùng đất được bao quanh bởi tế bào X nếu bạn có thê kết nối vùng đất với tết bào X và không có vùng đất nào là
trên cạnh của bảng
 để chiếm lấy vùng đất bao quanh thay thế tất cả O với X 

 nhiệm vụ hay chiếm lấy tất cả vùng O bằng X nếu vùng O nằm ở cạnh tức là nó k bị chiếm lấy 

Ý tưởng: sử dụng bfs khi gặp các vùng O ta sẽ nan rộng trong qua trình nan rộng nếu vùng đất đó có nối thoát thì sẽ đánh dấu nó có nối thoát và k thể bao phủ 

ta có thể lặp qua tất cả vùng biên nếu như gặp O và nan rộng sau đó duyệt qua ma trận và biến những O không nằm trong visited thành X




 */
