function countTrapezoids(points: number[][]): number {
    const MOD = 1000000007n;
    const mp = new Map<number, bigint>();

    for (const [x, y] of points) {
        mp.set(y, (mp.get(y) || 0n) + 1n);
    }

    const seg: bigint[] = [];
    for (const k of mp.values()) {
        if (k >= 2n) {
            seg.push(k * (k - 1n) / 2n % MOD);
        }
    }

    let sum = 0n, ans = 0n;
    for (const v of seg) {
        ans = (ans + v * sum) % MOD;
        sum = (sum + v) % MOD;
    }

    return Number(ans);
}