function firstStableIndex(nums: number[], k: number): number {
    let prefixMax = Array(nums.length)
    let max = -Infinity
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i]
        }

        prefixMax[i] = max
    }

    let suffMin = Array(nums.length)
    let min = Infinity
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] < min) {
            min = nums[i]
        }

        suffMin[i] = min
    }

    console.log(prefixMax, suffMin)

    for(let i = 0; i < nums.length; i++) {
        let score = prefixMax[i] - suffMin[i]
        if(score <= k) {
            return i
        }
    }


    return -1
};