function check(nums: number[]): boolean {
    let count = 0
    const n = nums.length

    for(let i = 0; i < n; i++) {
        if(nums[i] > nums[(i + 1) % n]) {
            count++
        }
    }

    return count <= 1
}