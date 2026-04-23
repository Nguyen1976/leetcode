function distance(nums: number[]): number[] {
    const map = new Map<number, number[]>()
    for(let i = 0; i < nums.length; i++) {
        map.has(nums[i]) ? map.get(nums[i]).push(i): map.set(nums[i], [i])
    }
    for(let [key, value] of map) {
        if(value.length === 1) {
            nums[value[0]] = 0
            continue
        }
        console.log(value)
        const n = value.length
        const prefix = Array(n + 1).fill(0)
        for(let i = 0; i < value.length; i++) {
            prefix[i + 1] = prefix[i] + value[i]
        }

        for(let i = 0; i < n; i++) {
            nums[value[i]] = ((value[i] * i) - (prefix[i])) + ((prefix[n] - prefix[i + 1]) - ((n - i - 1) * value[i]))
        }
    }

    return nums
};