/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) return 0
  if (m === 1 || n === 1) return 1

  const dp = new Array(m).fill(null).map(() => new Array(n).fill(0))//tạo mảng m*n\

  //Khởi tạo hàng đầu tiên và cột đầu tiên là 1
  for(let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for(let i = 0; i < n; i++) {
    dp[0][i] = 1
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  return dp[m-1][n-1];
}

/**
 * Dynamic programing-2d
 *  Gọi dp[i][j] là số cách để robot đi đến i, j
 *  Để đi đến ô i, j robot chỉ có thể đi từ (i - 1, j) di chuyển xuống hoặc (i, j - 1) di chuyển sang phải
 *  Vậy số cách để đến ô (i, j) là tổng 2 cách trên
 * TH cơ sở: ở hàng đầu tiên thì robot chỉ có thể đi sang phải tức là để đến được mọi vị trí trên hàng đầu tiên thì chỉ có 1 cách là đi sang phải dp[0][j] = 1 cho mọi j
 * Ở cột đầu tiên cũng chỉ có cách là đi xuống dp[j][0] = 1
 * Dùng vòng lặp lồng nhau để tính dực trên CT dp[i][j] = dp[i-1][j] + dp[i][j-1].
 */
