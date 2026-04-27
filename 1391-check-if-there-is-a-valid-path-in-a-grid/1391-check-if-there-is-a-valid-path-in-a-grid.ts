function hasValidPath(grid: number[][]): boolean {
    const m = grid.length;
    const n = grid[0].length;

    const dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    const opposite = [2, 3, 0, 1];

    const typeMap = {
        1: [1, 3],     // left <-> right
        2: [0, 2],     // up <-> down
        3: [3, 2],     // left <-> down
        4: [1, 2],     // right <-> down
        5: [0, 3],     // up <-> left
        6: [0, 1],     // up <-> right
    };

    const visited = Array.from({ length: m }, () => Array(n).fill(false));

     function dfs(x: number, y: number): boolean {
        if (x === m - 1 && y === n - 1) return true;

        visited[x][y] = true;

        for (const d of typeMap[grid[x][y]]) {
            const nx = x + dirs[d][0];
            const ny = y + dirs[d][1];

            if (
                nx >= 0 && nx < m &&
                ny >= 0 && ny < n &&
                !visited[nx][ny]
            ) {
                // check neighbor có connect ngược lại không
                if (typeMap[grid[nx][ny]].includes(opposite[d])) {
                    if (dfs(nx, ny)) return true;
                }
            }
        }

        return false;
    }

    return dfs(0, 0);
};
/**
mục đích là kết nối các cell với nhau và hoạt động như 1 quy luật hoàn chỉnh

ví dụ bắt đầu ở vị trí 0, 0 tức góc trên bên trái và đi theo đường đi của mảnh ghép
sử dụng dfs cho đến khi kết thúc tức đến được m-1, n-1
 */