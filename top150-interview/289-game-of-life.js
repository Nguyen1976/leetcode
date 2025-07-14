/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let row = board.length, col = board[0].length
    let neighbor = [
        [0, 1], [0, -1], [1, 0], [-1, 0], [-1, -1], [-1, 1], [1, -1], [1, 1]
    ]
    //)(m * n * 8)
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            let neighborCell = 0
            for(let [dx, dy] of neighbor) {
                let x = i + dx, y = j + dy
                if(x >= 0 && x < row && y >= 0 && y < col) {
                    // Chỉ đếm bit cuối (vì 1 và 2 là tế bào sống ban đầu)
                    if (board[x][y] === 1 || board[x][y] === 2) {
                        neighborCell++;
                    }
                }
            }
            if (board[i][j] === 1) {
                // Đang sống
                if (neighborCell < 2 || neighborCell > 3) {
                    board[i][j] = 2; // Sống → chết
                }
            } else {
                // Đang chết
                if (neighborCell === 3) {
                    board[i][j] = 3; // Chết → sống
                }
            }
        }
    }

    // Cập nhật trạng thái cuối cùng
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            board[i][j] %= 2;
        }
    }

    //m * n + 8m*n = 9 m * n
    //O(9m*n)
};

/**
Bất kỳ tế bào sống nào có ít hơn hai tế bào lân cận đều chết, như thể là do dân số giảm.
Bất kỳ tế bào sống nào có hai hoặc ba tế bào lân cận đều có thể sống đến thế hệ tiếp theo.
Bất kỳ tế bào sống nào có nhiều hơn ba tế bào lân cận đều chết, như thể do quá tải dân số.
Bất kỳ tế bào chết nào có đúng ba tế bào sống lân cận đều trở thành tế bào sống, như thể thông qua quá trình sinh sản.

Tức là tế bảo sống phải có 2 hoặc 3 tế bảo sống bên cạnh thì mới được đến thế hệ tiếp theo
Nhiều hơn 3 thì quá dân số
Ít hơn 2 là giảm dân số

1 và 0 là chưa động đến nó là ban đầu
2 và 3 sẽ là sau khi cập nhật: 
2 là sống sang chết tức là ban đầu nó sống hiện tại thì chết
3 sẽ là chết sang sống

sau đó sẽ cập nhật những bit 2 về 0; 3 về 1 bằng cách % 2

 */