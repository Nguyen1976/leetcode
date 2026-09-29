function productExceptSelf(nums: number[]): number[] {
    const ans = new Array(nums.length).fill(1)
    let p = 1
    for(let i = 0; i < nums.length; i++) {
        ans[i] *= p
        p = p * nums[i]
    }

    p = 1
    for(let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= p
        p = p * nums[i]
    }


    return ans
};