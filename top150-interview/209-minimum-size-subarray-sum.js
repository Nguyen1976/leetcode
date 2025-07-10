/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Infinity
    let total = 0
    let left = 0
    for(let i = 0; i < nums.length; i++) {
        total += nums[i]
        while(total >= target) {
            result = Math.min(result, i - left + 1);
            total -= nums[left++];
        }
    }
    return result === Infinity ? 0 : result
};