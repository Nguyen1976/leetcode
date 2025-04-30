/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

var nearestExit = function (maze, entrance) {
  const m = maze.length
  const n = maze[0].length
  const queue = [[entrance[0], entrance[1], 0]]
  const visited = new Set()
  visited.add(`${entrance[0]},${entrance[1]}`)

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  while (queue.length > 0) {
    const [row, col, step] = queue.shift()

    // Nếu không phải chính entrance và là biên => lối ra
    if (
      (row === 0 || col === 0 || row === m - 1 || col === n - 1) &&
      (row !== entrance[0] || col !== entrance[1])
    ) {
      return step
    }

    for (let [dx, dy] of directions) {
      const newRow = row + dx
      const newCol = col + dy
      const key = `${newRow},${newCol}`

      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        maze[newRow][newCol] === '.' &&
        !visited.has(key)
      ) {
        visited.add(key)
        queue.push([newRow, newCol, step + 1])
      }
    }
  }

  return -1 // không có lối ra nào
}

console.log(
  '🚀 ~ 1926-nearest-exit-from-entrance-in-maze.js:48 ~ nearestExit:',
  nearestExit(
    [
      ['+', '+', '.', '+'],
      ['.', '.', '.', '+'],
      ['+', '+', '+', '.'],
    ],
    [1, 2]
  )
)
//input [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], [1, 2]
//output 1

//Đề bài:
/**
 * Cho ma trận maze m*n
 * Những dấu + đại diện cho tường . là đường đi
 * Tại entrance = [row, col] là nơi nhân vật chúng ta đang đứng
 * Việc của chúng ta là tìm số bước để đến được lối ra
 * nếu đã đứng gần nối ra rồi thì trả về -1
 */

/**
 * Ý tưởng sẽ duyệt rộng từ chỗ đứng của nhân vật
 * Những vị trí ví dụ có col = 0 || col = len(col) - 1 || row = 0 || row = len(row) - 1 thì tức là đó là lối ra việc chúng ta là đưa nhân vật đến chỗ đó mà tốn ít bước nhất có thể
 * Sử dụng bfs và lấy ra các điểm lân cận mà !== "+" của nơi nhân vật đang đứng
 * Bài toán con sẽ là tìm các điểm lân cận mà hợp lệ vì nó phải !== + và nó phải khác những điểm k được nằm ngoài matrix
 * có 1 mảng visited đánh dấu những nơi đã đi qua
 * và chúng ta sẽ lưu dữ liệu của vị trí đã đi hoặc nơi lân cận dưới dạng [row, col]
 */
// ['+', '+', '.', '+'],
// ['.', '.', '.', '+'],
// ['+', '+', '+', '.']
//entrance: [1, 2] tức là sẽ mất 1 bước để đến được lối ra
// output: 1
