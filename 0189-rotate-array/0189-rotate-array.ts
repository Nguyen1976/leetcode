function rotate(nums: number[], k: number): void {
    const n = nums.length
    k %= n

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
};

function reverse(nums: number[], l: number, r: number) {
    while(l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }
}