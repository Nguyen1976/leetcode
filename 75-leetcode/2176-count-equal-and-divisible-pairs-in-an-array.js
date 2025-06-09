/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0

    //Lưu trữ cặp value và mảng index
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i]) && map.get(nums[i]).length > 0) {
            let indexs = map.get(nums[i])
            for(let e of indexs) {
                if((e * i) % k === 0) {
                    count++
                }
            }
            map.set(nums[i], [...map.get(nums[i]), i])
        } else {
            map.set(nums[i], [i])
        }
    }

    return count
};

//Ỷ tưởng dùng map lưu trữ các index xuất hiện của 1 num