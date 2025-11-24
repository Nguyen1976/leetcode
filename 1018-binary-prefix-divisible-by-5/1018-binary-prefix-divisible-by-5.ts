function prefixesDivBy5(nums: number[]): boolean[] {
    let ans: boolean[] = []
    let mod = 0

    for (let bit of nums) {
        mod = (mod * 2 + bit) % 5
        ans.push(mod === 0)
    }

    return ans
};