function removeElement(nums: number[], val: number): number {
    let lastAvail = nums.length - 1
    let k = nums.length

    let i = 0

    while (i <= lastAvail) {
        if (nums[i] === val) {
            k--
            [nums[i], nums[lastAvail]] = [nums[lastAvail], nums[i]]
            lastAvail--
        } else {
            i++
        }
    }

    return k
}