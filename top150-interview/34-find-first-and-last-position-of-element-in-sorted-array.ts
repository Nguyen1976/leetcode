function searchRange(nums: number[], target: number): number[] {
  const n = nums.length

  const findLeft = (): number => {
    let left = 0,
      right = n - 1,
      index = -1
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] >= target) {
        if (nums[mid] === target) {
          index = mid
        } //tức nếu nó bằng thì lấy
        right = mid - 1 //và luôn luôn lùi right về tiếp tục tìm kiếm đằng trước
      } else left = mid + 1
    }
    return index
  }

  const findRight = (): number => {
    let left = 0,
      right = n - 1,
      index = -1
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] <= target) {
        if (nums[mid] === target) {
          index = mid
        } //tức nếu nó bằng thì lấy
        left = mid + 1 //và luôn luôn lùi right về tiếp tục tìm kiếm đằng trước
      } else right = mid - 1
    }
    return index
  }
  return [findLeft(), findRight()]
}
