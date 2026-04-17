function minMirrorPairDistance(nums: number[]): number {
    let result = Infinity
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        //reverse của số hiện tại
        //từ vị trí hiện tại tìm
        const reverseNum = Number(String(nums[i]).split('').reverse().join(''))
         if (map.has(nums[i])) {
            result = Math.min(result, i - map.get(nums[i])!)
        }

        // luôn update index mới nhất (để khoảng cách nhỏ nhất)
        map.set(reverseNum, i)
    }

    return result === Infinity ? -1 : result
};

/*


*/