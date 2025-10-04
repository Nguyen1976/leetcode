function search(nums: number[], target: number): number {
  if (nums.length === 1) return nums[0] === target ? 0 : -1
  if (nums.length === 0) return -1

  let start = 0,
    end = nums.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) return mid
    if (nums[mid] > nums[end]) {
      if (nums[start] <= target && nums[mid] > target) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if (nums[end] >= target && nums[mid] < target) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }

  return -1
}

/**

 */
