function containsCycle(grid: string[][]): boolean {
    const n = grid.length, m = grid[0].length
    const visited = Array.from({ length: n }, () => Array(m).fill(false))
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]

    const inBound = (x: number, y: number) => x >= 0 && x < n && y >= 0 && y < m

    const dfs = (x: number, y: number, px: number, py: number): boolean => {
        visited[x][y] = true

        for (const [dx, dy] of dirs) {
            const nx = x + dx
            const ny = y + dy

            if (!inBound(nx, ny)) continue
            if (grid[nx][ny] !== grid[x][y]) continue

            if (nx === px && ny === py) continue

            if (visited[nx][ny]) return true

            if (dfs(nx, ny, x, y)) return true
        }

        return false
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1)) return true
            }
        }
    }

    return false
}