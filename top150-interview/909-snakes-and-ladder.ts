function snakesAndLadders(board: number[][]): number {
    const n = board.length

    //helper: chuyển từ số ô 1 -> n^2 sang vị trí row col
    let getPosition = (s: number): [number, number] => {
        const quot = Math.floor((s - 1) / n)
        const row = n - 1 - quot;
        let col = (s - 1) % n;

        if ((n - 1 - row) % 2 === 1) {
            col = n - 1 - col;
        }

        return [row, col];
    }

    const visited = new Array(n * n + 1).fill(false);

    const queue: [number, number][] = [[1, 0]]// [current square, steps]
    visited[1] = true;

    while(queue.length > 0) {
        const [curr, steps] = queue.shift()!

        if(curr === n * n) return steps


        for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
            const [r, c] = getPosition(next);
            const dest = board[r][c] === -1 ? next : board[r][c];

            if (!visited[dest]) {
                visited[dest] = true;
                queue.push([dest, steps + 1]);
            }
        }

    }

    return -1
};

/**

* quy tắc di chuyển:
- quăng xúc xắc 6 mặt
chọn ô tiếp theo next trong khoảng [curr+1, min(curr+6, n²)]

nếu ô next là đầu của con rắn hoặc ladder board[r][c] != -1
phải đi thằng đến ô được chỉ định

giải bài toán với bfs duyệt rộng vì chúng ta cần hiểu toàn bộ đồ thị thì mới có thể đưa ra nước đi tối ưu nhất

 */