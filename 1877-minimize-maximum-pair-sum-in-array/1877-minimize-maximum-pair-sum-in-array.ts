function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let n = nums.length, res = -Infinity
    for(let i = 0; i < n / 2; i++) {
        res = Math.max(res, nums[i] + nums[n - i - 1])
    }

    return res
};

/**


 */