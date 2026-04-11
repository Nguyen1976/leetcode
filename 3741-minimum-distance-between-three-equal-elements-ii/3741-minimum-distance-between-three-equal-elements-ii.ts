function minimumDistance(nums: number[]): number {
     const map = new Map<number, number[]>()
     for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], [])
        }
        map.get(nums[i])!.push(i)
    }

    let result = Infinity

    for(let [key, value] of map) {
        if(value.length >= 3) {
            //cửa sổ trượt
            for(let i = 0; i <= value.length - 3; i++) {
                result = Math.min(result, Math.abs(value[i] - value[i + 1]) + Math.abs(value[i + 1] - value[i + 2]) + Math.abs(value[i + 2] - value[i]))

            }
        }
    }

    return result === Infinity ? -1 : result
};