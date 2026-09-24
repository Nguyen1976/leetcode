function majorityElement(nums: number[]): number {
    const map = new Map()
    for(let num of nums) {
        map.set(num, map.has(num) ? map.get(num) + 1 : 1 )
    }

    for(let [key, val] of map) {
        if(val >= nums.length / 2) return key
    }

    return 0
};