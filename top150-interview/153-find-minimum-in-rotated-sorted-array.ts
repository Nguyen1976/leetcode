function findMin(nums: number[]): number {
  const n = nums.length
  let left = 0,
    right = n - 1
  if (nums[left] <= nums[right]) return nums[left]

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}
