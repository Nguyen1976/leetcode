function robotSim(commands: number[], obstacles: number[][]): number {
    const set = new Set(obstacles.map(([x, y]) => `${x},${y}`))

    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]

    let dir = 0
    let x = 0, y = 0
    let maxDist = 0

    for (let cmd of commands) {
        if (cmd === -1) {
            dir = (dir + 1) % 4
        } else if (cmd === -2) {
            dir = (dir + 3) % 4
        } else {
            for (let i = 0; i < cmd; i++) {
                const nx = x + dirs[dir][0]
                const ny = y + dirs[dir][1]

                if (set.has(`${nx},${ny}`)) break

                x = nx
                y = ny

                maxDist = Math.max(maxDist, x * x + y * y)
            }
        }
    }

    return maxDist
}