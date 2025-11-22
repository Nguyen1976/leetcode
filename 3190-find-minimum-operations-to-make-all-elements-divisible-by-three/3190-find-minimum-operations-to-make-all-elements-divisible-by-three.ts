function minimumOperations(nums: number[]): number {
    //find element disvisible by three
    return nums.filter(e => e % 3 !== 0).length
};