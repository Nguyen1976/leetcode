function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)
    let res = Infinity
    for(let i = k - 1; i < nums.length; i++) {
        res = Math.min(res, nums[i] - nums[i - (k - 1)])
    }

    return res
};
