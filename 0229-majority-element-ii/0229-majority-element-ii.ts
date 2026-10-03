function majorityElement(nums: number[]): number[] {
    const n = nums.length
    const result = []
    const map = new Map<number, number>()

    for(let num of nums) map.set(num, map.has(num) ? map.get(num) + 1 : 1)

    for(let [key, val] of map) {
        if(val > Math.floor(n / 3)) result.push(key)
    }

    return result
};