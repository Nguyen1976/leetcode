/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0
  let maxSum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }

  maxSum = sum

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]
    maxSum = Math.max(sum, maxSum)
  }

  return maxSum / k
}

//Sử dụng của sổ trượt để tìm giá trị trung bình lớn nhất của k phần tử liên tiếp
console.log(
  '🚀 ~ 643-maximum-average-subarray-i.js:9 ~ findMaxAverage:',
  findMaxAverage([0, 4, 0, 3, 2], 1)
)
