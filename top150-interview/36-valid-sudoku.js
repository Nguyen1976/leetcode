/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //O(n^2)
  for (let i = 0; i < board.length; i++) {
    let row = {}
    let column = {}
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] != '.') {
        if (row[board[i][j]]) return false
        row[board[i][j]] = true
      }
      if (board[j][i] != '.') {
        if (column[board[j][i]]) return false
        column[board[j][i]] = true
      }
    }
  }

  //Check 3*3
  //O( (n^4)/3)
  for (let startRow = 0; startRow < 9; startRow += 3) {
    for (let startCol = 0; startCol < 9; startCol += 3) {
      let boxSet = {}
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let val = board[startRow + i][startCol + j]
          if (val !== '.') {
            if (boxSet[val]) return false
            boxSet[val] = true
          }
        }
      }
    }
  }

  return true
}

/*
Xác định cái bảng sudoku hiện tại có đúng không
Chúng ta có thể dễ dàng kiểm tra 1 hàng 1 cột có hợp lệ không

Vấn đề là kiểm tra mỗi ô 3*3
chúng ta sẽ phân tích index của các ô trong board

mỗi ô vuông con nó sẽ bắt đầu từ đây tổng cổng có 9 ô
bên dưới sẽ là những điểm đầu của 1 trong 9 ô vuông tức là ta cần 2 vòng lặp lồng nhau bước nhảy 3 để đi qua nó

(0,0), (0,3), (0,6)
(3,0), (3,3), (3,6)
(6,0), (6,3), (6,6)

Trong mỗi điểm ta cần chạy đủ để có thể đi qua hết các ô cần đi ví dụ với điểm (0, 0)
ví dụ với 0, 0 ta có:
00 01 02
10 11 12
20 21 22

Tức là cần thêm 1 cặp vòng lặp lồng nhau bước nhảy 1 và điểm xuất phát là 1 trong các cặp trên hoặc điểm xuát phát từ 0->3 nhưng phải cộng thêm tọa độ đầu để có thể đén điểm hợp lệ


*/
