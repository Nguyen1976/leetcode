function pivotArray(nums: number[], pivot: number): number[] {
    const n = nums.length
    const less = [], equal = [], greater = []
    for(let i = 0; i < n; i++) {
        if(nums[i] < pivot) {
            less.push(nums[i])
        } else if(nums[i] > pivot) {
            greater.push(nums[i])
        } else {
            equal.push(nums[i])
        }
    }

    return [...less, ...equal, ...greater]
};

