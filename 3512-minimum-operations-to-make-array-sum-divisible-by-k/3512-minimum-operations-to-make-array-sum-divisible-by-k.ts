function minOperations(nums: number[], k: number): number {
    let operations = 0
    let currSum = nums.reduce((acc, curr) => acc + curr, 0)

    while(currSum % k !== 0) {
        currSum--
        operations++
    }

    return operations
};