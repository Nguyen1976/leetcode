/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let mark = 0, i = 0;
    let result = []
    while(i < nums.length) {
        if(nums[i + 1] !== nums[i] + 1) {
            if(mark === i) {
                result.push("" + nums[i])
            } else {
                result.push("" + nums[mark] + "->" + nums[i])
            }
            mark = i + 1
        } 
        i++
    }
    return result
};

