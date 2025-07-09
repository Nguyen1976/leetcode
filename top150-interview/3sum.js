/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);//sort để có thể dễ xử lý trùng

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {//trường hợp duplicate
            continue;
        }
        let left = i + 1, right = nums.length - 1

        while(left < right) {
            total = nums[i] + nums[left] + nums[right]
            if(total === 0) {
                res.push([nums[i], nums[left], nums[right]])


                //skip duplicate
                while (left < right && nums[left] === nums[left + 1]) {
                    left += 1
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right -= 1
                }

                left += 1
                right -= 1
            } else if(total < 0) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return res
};