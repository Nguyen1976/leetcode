/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0 //vị trí xa nhất có thể đi được
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false //Tức là đã lặp qua đến nơi mà lớn hơn cả nơi xa nhất có thể nhảy được

    maxReach = Math.max(maxReach, i + nums[i])
  }

  return true
}
