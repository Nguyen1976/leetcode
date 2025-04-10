/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    result = -Infinity

  while (left < right) {
    result = Math.max(
      result,
      Math.min(height[left], height[right]) * (right - left)
    )
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }

  return result
}
console.log(
  '🚀 ~ 11-container-with-most-water.js:18 ~ maxArea:',
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
)

//Ý tưởng sử dụng 2 con trỏ ở đầu và cuối
//và mỗi lần di chuyển sẽ tính lượng nước chứa được
//công thức tính Math.min(height[left], height[right]) * (right - left)
