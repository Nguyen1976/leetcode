function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>()

    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1)
    }

    const arr = Array.from(map)
    arr.sort((a, b) => b[1] - a[1])

    return arr.map(e => e[0]).slice(0, k)
};