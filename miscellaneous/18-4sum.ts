function fourSum(nums: number[], target: number): number[][] {
  let results = [] as number[][]
  nums.sort((a, b) => a - b)

  const addIfNotDuplicate = (arr: number[]) => {
    if (!results.some((item) => item.every((v, i) => v === arr[i]))) {
      results.push(arr)
    }
  }

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      //để đảm bảo luôn còn 2 số nguyên đằng sau j
      //tìm 2 số còn lại phù hợp
      let totalSearch = target - nums[i] - nums[j]
      //sẽ bắt đầu tìm từ j đổ đi
      let left = j + 1,
        right = nums.length - 1
      while (left < right) {
        if (nums[left] + nums[right] === totalSearch) {
          addIfNotDuplicate([nums[i], nums[j], nums[left], nums[right]])
          left++
          right--
        } else if (nums[left] + nums[right] > totalSearch) {
          right--
        } else {
          left++
        }
      }
    }
  }

  return results
}

/**
Thử giả định target luôn dương để giải quyết bài toàn
 */
