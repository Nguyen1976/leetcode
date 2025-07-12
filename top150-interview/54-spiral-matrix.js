/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length
    let x = 0, y = 0, dx = 1, dy = 0, res = []

    for(let i = 0; i < rows * cols; i++) {
        res.push(matrix[y][x])
        matrix[y][x] = "."

        //khi gặp ngõ cụt hoặc phần tử đã duyệt rồi thì sẽ đổi hướng
        if (!(0 <= x + dx && x + dx < cols && 0 <= y + dy && y + dy < rows) || matrix[y+dy][x+dx] === ".") {
            [dx, dy] = [-dy, dx];
        }

        x += dx
        y += dy
    }

    return res
};

/*
    Duyệt ma trận từ ngoài vào trong
    dx dy dùng để xác định hướng và chúng ta sẽ đổi hướng khi gặp ngõ cụt
    ví dụ dx = 1 dy = 0 tức là đang chạy từ phải sang trái
    dx = 0 dy = 1 từ trên xuống dưới
    dx = -1 dy = 0 phải sang trái
    ....
*/