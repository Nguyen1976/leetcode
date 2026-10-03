function subarraySum(nums: number[], k: number): number {
    const prefixSumMap = new Map<number, number>()

    prefixSumMap.set(0, 1)

    let currSum = 0, res = 0

    for(let i = 0; i < nums.length; i++) {
        currSum += nums[i]

        const target = currSum - k
        if(prefixSumMap.has(target)) {
            res += prefixSumMap.get(target)!
        }

        prefixSumMap.set(currSum, prefixSumMap.has(currSum) ? prefixSumMap.get(currSum) + 1 : 1);
    }

    return res
};