function findFinalValue(nums: number[], original: number): number {
    if(!nums.includes(original)) return original
    let start = original
    while(nums.includes(start * 2)) {
        start *= 2
    }

    return start * 2
};