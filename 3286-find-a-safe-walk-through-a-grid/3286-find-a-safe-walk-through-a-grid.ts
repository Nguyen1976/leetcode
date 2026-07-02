function findSafeWalk(grid: number[][], health: number): boolean {
    
    const n = grid.length, m = grid[0].length
    const queue: [number, number, number][] = [[0, 0, health - grid[0][0]]]
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let idx = 0
    const best = Array.from(
        { length: n },
        () => Array(m).fill(-1)
    );
    best[0][0] = health - grid[0][0];

    while(idx < queue.length) {
        const [x, y, h] = queue[idx++]
        if(x === n - 1 && y === m - 1) return true

        for(let dir of dirs) {
            let nx = dir[0] + x
            let ny = dir[1] + y
            if(nx < n && ny < m && nx >= 0 && ny >= 0) {
                let nh = h - grid[nx][ny]
                if(nh >= 1 && nh > best[nx][ny]) {
                    best[nx][ny] = nh;
                    queue.push([nx, ny, nh])
                }
            }
        }
    }

    return false
};