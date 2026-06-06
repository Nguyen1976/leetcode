function leftRightDifference(nums: number[]): number[] {
    const n = nums.length
    const leftSum = Array(n).fill(0)
    const rightSum = Array(n).fill(0)
    for(let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1]
        rightSum[n - i - 1] = rightSum[n - i] + nums[n - i]
    }
    console.log(rightSum)


    for(let i = 0; i < n; i++) {
        nums[i] = Math.abs(leftSum[i] - rightSum[i])
    }

    return nums
};