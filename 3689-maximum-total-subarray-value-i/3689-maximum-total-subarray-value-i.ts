function maxTotalValue(nums: number[], k: number): number {
    return (Math.max(...nums) - Math.min(...nums)) * k
};