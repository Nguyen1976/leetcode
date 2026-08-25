function missingMultiple(nums: number[], k: number): number {
    const set = new Set(nums)
    let res = k
    while(set.has(res)) {
        res += k
    }

    return res
};