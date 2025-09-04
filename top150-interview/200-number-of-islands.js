/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0
  const visited = new Set()
  const rows = grid.length
  const cols = grid[0].length

  const bfs = (r, c) => {
    const q = [] //queue để xử lý tuần tự các vị trí đã ghé thăm
    visited.add(`${r},${c}`) //lưu tọa độ các vùng đát đã ghé thăm
    q.push([r, c])

    while (q.length > 0) {
      const [row, col] = q.shift()
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ] //4 hướng có thể di chuyển

      for (const [dr, dc] of directions) {
        //nôm na là ở tọa độ hiện tại từ queue sẽ được di chuyển ra 4 hướng
        //mỗi tọa độ được thăm sẽ kiếm tra tính hợp lệ và có phải là vùng đất mới k tức đất mà chưa ghé thăm lần nào
        //và sẽ tiếp tục lan roonnjg ra các vùng đất xung quanh mỗi lần như vậy sẽ phải đánh dấu và đưa và queue để tiếp tục lan ra ở trong vòng lặp mới
        //và với set chúng ta sẽ loại ra được những vùng đất đã lặp qua rồi
        const nr = row + dr
        const nc = col + dc

        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nr][nc] === '1' &&
          !visited.has(`${nr},${nc}`)
        ) {
          q.push([nr, nc])
          visited.add(`${nr},${nc}`)
        }
      }
    }
  }

  //lặp qua các điểm trong graph
  //ví dụ điểm hiện tại là 1 vùng đất mà chưa được thăm chẳng hạn thì sẽ tính là vùng đất mới và sẽ bfs lan ra tất cả các vùng lân cận để có thể ghé thăm các vùng đất hợp lệ
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1' && !visited.has(`${r},${c}`)) {
        islands += 1
        bfs(r, c)
      }
    }
  }

  return islands
}

//O(m*n)
