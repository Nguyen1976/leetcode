/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((acc, curr) => acc + curr, 0)

  let prefix = 0
  for (let i = 0; i < nums.length; i++) {
    if (prefix === total - prefix - nums[i]) {
      return i
    }
    prefix += nums[i]
  }

  return -1
}
console.log(
  '🚀 ~ 724-find-pivot-index.js:6 ~ pivotIndex:',
  pivotIndex([1, 7, 3, 6, 5, 6])
)

//Vì là chọn pivot lên chúng ta có thể sử dụng tổng toàn mảng và prefix mõi alafn duyệt
