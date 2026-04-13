function getMinDistance(nums: number[], target: number, start: number): number {
    let result = Infinity
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            result = Math.min(result, Math.abs(i - start))
        }
    }

    return result
};