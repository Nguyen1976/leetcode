function maxSubarraySumCircular(nums: number[]): number {
  let total = nums[0],
    maxSum = nums[0],
    minSum = nums[0],
    currentMax = nums[0],
    currentMin = nums[0]

  for (let i = 1; i < nums.length; i++) {
    total += nums[i]

    currentMax = Math.max(nums[i], currentMax + nums[i]) // cộng khi nó tăng
    maxSum = Math.max(maxSum, currentMax)

    currentMin = Math.min(nums[i], currentMin + nums[i])
    minSum = Math.min(minSum, currentMin) //cộng khi nó giảm
  }

  if (minSum === total) {
    return maxSum
  }

  return Math.max(maxSum, total - minSum)
}

//đây là mảng hình tròn, về mặt hình thức nums[(i + 1) % n] là trước i và nums[(i - 1 + n) % n] là sau i

//Và cần tìm tổng lớn nhất cảu 1 subarr không rỗng trong mảng này
//subarr hợp lệ là chỉ bao gồm 1 phần tử k được lặp lại
/**
    Cách tiếp cận 
    trường hợp 1 không xoay vòng
    dùng Kadane's algorithm
    trường hợp 2 xoay vòng, tổng lớn nhất = tổng toàn bộ mảng - tổng nhỏ nhất subarr k xoay vòng


    thuật toán Kadane là sẽ quét mảng và giữ tổng con hiên tại nếu phần tử tiếp theo làm tăng curr thì sẽ cộng
 */
