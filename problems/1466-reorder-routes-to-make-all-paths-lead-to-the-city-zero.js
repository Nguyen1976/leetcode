/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

//Time limit
// var minReorder = function (n, connections) {
//   let count = 0
//   const visited = new Array(connections.length).fill(false) //Lưu các cạnh đã được thay đổi
//   const dfs = (city) => {
//     for (let i = 0; i < connections.length; i++) {
//       if (connections[i].includes(city) && !visited[i]) {
//         //Cạnh này phải chwua được thay đổi
//         if (connections[i][0] === city) {
//           ;[connections[i][0], connections[i][1]] = [
//             connections[i][1],
//             connections[i][0],
//           ]
//           count++
//         }
//         visited[i] = true
//         dfs(connections[i][0])
//       }
//     }
//   }
//   for (let i = 0; i < connections.length; i++) {
//     if (connections[i].includes(0) && !visited[i]) {
//       if (connections[i][0] === 0) {
//         //TH cần phải đảo hướng
//         ;[connections[i][0], connections[i][1]] = [
//           connections[i][1],
//           connections[i][0],
//         ]
//         count++
//       }
//       visited[i] = true
//       dfs(connections[i][0]) //Tức là phải bỏ qua cái cạnh hiện tại vì nó xử lý r
//     }
//   }

//   return count
// }

/**
 * Đây là 1 đồ thị có hướng
 * connections biểu diễn các kết nối và hướng
 * đề bài yêu cầu sắp xếp lại để cho các node đều phải hướng về thành phố không
 * trả về số lần cần phải thay đổi
 * Ý tưởng:
 * Sẽ có 1 dfs phục vụ các bược đảo ngược nếu cần nó nhận vào 1 city và cần tìm các cạnh khác chưa nó để đảo ngược hướng về nó
 * nếu có node 0 thì sẽ đảo ngược cạnh đó hướng đúng về node 0 và tiếp tục dfs từ node tiếp theo
 * Cách này sẽ có độ phức tạp là O(n2)
 */

//solution

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  //adj[i] sẽ lưu tất cả các cạnh liền với i
  const adj = Array.from({ length: n }, () => [])

  //Mảng lưu hướng cạnh ban đầu
  //ví dụ directions[i] = 1 tức là đang cso hướng i -> 1
  const directions = Array.from({ length: n }, () => [])

  for (const [from, to] of connections) {
    adj[from].push(to)
    adj[to].push(from)

    directions[from].push(to)
  }

  let count = 0
  const visited = new Array(n).fill(false)//Đánh dấu các thành phố đã ghe thăm

  const dfs = (city) => {
    visited[city] = true
    for (const neighbor of adj[city]) {//Lặp qua các thành phố kề với city
      if (!visited[neighbor]) {//Kiểm tra xem thành phố kề với city 
        if (directions[city].includes(neighbor)) {//tức là nếu city hướng đến neighbor thì tức là phải đảo vì chúng ta đang muốn hường neighbor đến city
          count++
        }
        dfs(neighbor)//Tiếp tục xem hướng đến neighbor
      }
    }
  }

  dfs(0)
  return count
}
