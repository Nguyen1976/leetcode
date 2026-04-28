function minOperations(grid: number[][], x: number): number {
    const arr = grid.flat().sort((a, b) => a - b)

    for (let num of arr) {
        if ((num - arr[0]) % x !== 0) return -1
    }

    const median = arr[Math.floor(arr.length / 2)]

    let ops = 0
    for (let num of arr) {
        ops += Math.abs(num - median) / x
    }

    return ops
}