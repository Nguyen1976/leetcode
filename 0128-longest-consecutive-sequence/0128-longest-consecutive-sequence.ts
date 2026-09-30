function longestConsecutive(nums: number[]): number {
    nums.sort((a, b) => a - b)
    nums = Array.from(new Set(nums))
    if(nums.length === 1 || nums.length === 0) return nums.length
    let result = 0
    for(let i = 1; i < nums.length; i++) {
        let count = 1
        while(nums[i] === (nums[i - 1] + 1)) {
            count++
            i++
        }
        result = Math.max(result, count)
    }


    return result
};