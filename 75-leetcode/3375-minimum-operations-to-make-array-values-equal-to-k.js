/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let set = new Set()
  let count = 0

  for (num of nums) {
    if (num > k) {
      if (!set.has(num - k)) {
        set.add(num - k)
        count++
      }
    } else if (num < k) {
      return -1
    }
  }

  return count
}
