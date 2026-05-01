function maxRotateFunction(nums: number[]): number {
    const n = nums.length
    
    let sum = 0
    let f = 0
    
    for(let i = 0; i < n; i++) {
        sum += nums[i]
        f += nums[i] * i
    }
    
    let result = f
    
    for(let k = 1; k < n; k++) {
        f = f + sum - n * nums[n - k]
        result = Math.max(result, f)
    }
    
    return result
}