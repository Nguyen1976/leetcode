function numOfWays(n: number): number {
    let mod = 1e9 + 7
    let diff = 6;
    let same = 6;
    for (let i = 1; i < n; ++i) {
        let newDiff = (2 * diff + 2 * same) % mod;
        let newSame = (2 * diff + 3 * same) % mod;
        same = newSame;
        diff = newDiff;
    }
    return (same + diff) % mod;
};