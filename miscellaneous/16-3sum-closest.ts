function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)

  let closet_sum = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === target) return sum

      if (Math.abs(sum - target) < Math.abs(closet_sum - target)) {
        closet_sum = sum
      }

      if (sum > target) right--
      else left++
    }
  }
  return closet_sum
}
