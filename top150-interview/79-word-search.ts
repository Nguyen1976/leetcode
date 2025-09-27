function exist(board: string[][], word: string): boolean {
  let m = board.length,
    n = board[0].length
  let visited: number[][] = board.map((row) => row.map(() => 0))
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  let backtracking = (currPosition: number[], currWord: string) => {
    if (currWord === word) return true
    if (currWord.length >= word.length) return false

    for (let direct of direction) {
      let x = direct[0] + currPosition[0],
        y = direct[1] + currPosition[1]
      if (x < 0 || x >= m || y < 0 || y >= n) continue
      if (board[x][y] !== word[currWord.length]) continue
      if (visited[x][y]) continue

      let newWord = currWord + board[x][y]
      visited[x][y] = 1
      if (backtracking([x, y], newWord)) return true
      visited[x][y] = 0
    }

    return false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        visited[i][j] = 1
        if (backtracking([i, j], word[0])) return true
        visited[i][j] = 0
      }
    }
  }

  return false
}

//mỗi bước đi cần một bước dệ quy 4 hướng còn lại và ở mỗi đề quy cần đánh dầu những nơi mà đã đi qua rồi tức cần một mảng visited lưu các tọa độ mà đã duyệt qua
