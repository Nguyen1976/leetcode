function repeatedNTimes(nums: number[]): number {
    const n = nums.length, map = new Map<number, number>()
    let res = 0
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1: 1)
        if(map.get(nums[i]) === n / 2) {
            res = nums[i]
            break
        }
    }

    return res
};
/**
nums chứa nums.length / 2 + 1 phần tử unique và có 1 phần tử lặp lại nums.length / 2 lần
tìm phần tử đó

 */