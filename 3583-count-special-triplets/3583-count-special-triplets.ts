function specialTriplets(nums: number[]): number {
    const MOD = 1_000_000_007n;

    const countLeft = new Map<number, bigint>()
    const countRight = new Map<number, bigint>()

    for (const num of nums) {
        countRight.set(num, (countRight.get(num) ?? 0n) + 1n)
    }

    let res = 0n

    for(const num of nums) {
        countRight.set(num, countRight.get(num)! - 1n)

        const target = num * 2
        const left = countLeft.get(target) ?? 0n
        const right = countRight.get(target) ?? 0n
        res = (res + left * right) % MOD

        countLeft.set(num, (countLeft.get(num) ?? 0n) + 1n)
    }

    return Number(res)
}