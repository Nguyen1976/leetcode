/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = new Map()

  equations.forEach(([a, b], i) => {
    if (!graph.has(a)) graph.set(a, new Map())
    if (!graph.has(b)) graph.set(b, new Map())
    graph.get(a).set(b, values[i])
    graph.get(b).set(a, 1 / values[i])
  })

  const dfs = (start, end, visited) => {
    if (!graph.has(start) || !graph.has(end)) return -1.0
    if (start === end) return 1
    visited.add(start)
    for (const [neighbor, val] of graph.get(start)) {
      if (!visited.has(neighbor)) {
        //điểm đích đến phải chưa được thăm
        const result = dfs(neighbor, end, visited)
        if (result !== -1.0) return result * val
      }
    }
    return -1.0
  }

  return queries.map(([a, b]) => dfs(a, b, new Set()))
}

/**
 * Đề bài cho 1 mảng các cặp chữ cái equations (include a, b, c, d)
 * values là mảng kết quả cho phép tính chia của các cặp chữ cái từ equations
 * hãy tính giá trị của các cặp trong mảng queries nếu 1 giá trị k hợp lệ thì trả về -1 cho giá trị đó ví dụ x/x
 * Ý tưởng:
 * Chúng ta sẽ build 1 graph từ equations
 * graph hoạt động 1 key1 sẽ lưu 1 các map gồm key2, value tức là key1/ key2 = value
 *  ví dụ chúng ta tìm a / c thì sẽ là từ a / x * x / c = a / c tức là đường đi từ a đến x nhân với từ x đến c
 * Sử dụng dfs để tìm đường đi từ a đến b
 * return về kết quá
 */
