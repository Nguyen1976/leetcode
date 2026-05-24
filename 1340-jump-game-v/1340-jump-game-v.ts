function maxJumps(arr: number[], d: number): number {
    const n = arr.length

    const dp = new Array(n).fill(1)

    // sort index theo height tăng dần
    const indexes = [...Array(n).keys()]
    indexes.sort((a, b) => arr[a] - arr[b])

    for (const i of indexes) {

        // trái
        for (let step = 1; step <= d; step++) {
            const next = i - step

            if (next < 0) break
            if (arr[next] >= arr[i]) break

            dp[i] = Math.max(dp[i], 1 + dp[next])
        }

        // phải
        for (let step = 1; step <= d; step++) {
            const next = i + step

            if (next >= n) break
            if (arr[next] >= arr[i]) break

            dp[i] = Math.max(dp[i], 1 + dp[next])
        }
    }

    return Math.max(...dp)
}