function maximumSafenessFactor(grid: number[][]): number {
    const n = grid.length
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]

    const dist = Array.from({ length: n }, () => Array(n).fill(-1));
    
    const queue = []
    let head = 0

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                dist[i][j] = 0
                queue.push([i, j])
            }
        }
    } 

    while(head < queue.length) {
        const [r, c] = queue[head++]

        for(const [dr, dc] of dirs) {
            const nr = r + dr
            const nc = c + dc

            if(nr >= 0 &&
            nr < n &&
            nc >= 0 &&
            nc < n &&
            dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc])
            }
        }
    }

    const canReach = (limit: number): boolean => {
        if(dist[0][0] < limit) return false 

        const visited = Array.from({ length: n }, () => Array(n).fill(false));

        let q: [number, number][]  = [[0, 0]]

        let idx = 0
        visited[0][0] = true;

        while (idx < q.length) {
            const [r, c] = q[idx++];

            if (r === n - 1 && c === n - 1) {
                return true;
            }

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < n &&
                    nc >= 0 &&
                    nc < n &&
                    !visited[nr][nc] &&
                    dist[nr][nc] >= limit
                ) {
                    visited[nr][nc] = true;
                    q.push([nr, nc]);
                }
            }

        }

        return false
    }

    let left = 0
    let right = 2 * (n - 1)

    while(left < right) {
        const mid = Math.floor((left + right + 1) / 2);

        if(canReach(mid)) {
            left = mid
        } else {
            right = mid - 1
        }
    }

    return left
}; 