function leftRightDifference(nums: number[]): number[] {
    const n = nums.length
    const ans = Array(n).fill(0)
    let prefix = 0, suffix = nums.reduce((acc, curr) => acc + curr, 0 - nums[0])
    for(let i = 0; i < n; i++) {
        ans[i] = Math.abs(suffix - prefix)
        prefix += nums[i]
        suffix -= nums[i + 1]
    }

    return ans
};