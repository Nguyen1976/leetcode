/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let rowMap = new Map()

  //Lưu theo row
  for (let row of grid) {
    rowMap.set(row.join(' '), (rowMap.get(row.join(' ')) || 0) + 1)
  }

  let equal = 0

  //lưu theo column
  for (let i = 0; i < grid.length; i++) {
    //i đại diện cho từng cột
    let column = []
    for (let j = 0; j < grid.length; j++) {
      //j đại diện cho từng hàng
      //=> giá trị tại từng cột grid[j->][i]
      column.push(grid[j][i])
    }
    let key = column.join(' ')
    if (rowMap.has(key)) {
      equal += rowMap.get(key)
    }
  }

  return equal
}

//Sẽ lưu các row vào map trước sao đó sẽ lặp qua column và cứ 1 lần trùng nhau thì equal sẽ tính là 1 lần trùng
//rowMap sẽ lưu tần xuất xuất hiện của row khi lặp qua col nếu col bắt gặp row đang có tần xuất 2 thì equal sẽ dược += 2 vì nó có thể bắt được 2 cặp
console.log(
  equalPairs([
    [13, 13],
    [13, 13],
  ])
)
