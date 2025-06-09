/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    const dp = new Array(n + 1);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);


    for(let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[n - 1]
};


/**
 * Sẽ đi cướp từng nhà và không được cướp 2 nhà liền kề nhau
 * Trả về số tiền tối đa mà không bị cảnh sát bắt
 * 
 * Sử dụng dp-d1 lưu số tiền cướp được nhiều nhất tại nhà thứ i
 * Tại nhà i có thể k cướp số tiền dp[i - 1]
 * cướp số tiền là dp[i - 2] + nums[i]
 * 
 */