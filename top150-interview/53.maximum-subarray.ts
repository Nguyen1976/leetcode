function maxSubArray(nums: number[]): number {
  let currMax = -Infinity,
    golobalMax = -Infinity

  for (let num of nums) {
    currMax = Math.max(num, currMax + num) //phòng trường hợp num là số âm mà currmax cũng là số âm thì sẽ lấy num đảm bảo luôn cộng num nếu num làm tăng giá trị của sum giả sử trường hợp hiện tại là số sương mà trước đó toàn số âm thì việc cộng thêm làm tăng giá trị nhưng sẽ k cho ra subArray sum lớn nhất vì các số trường đó làm giảm sum đi lên sẽ được bắt đầu từ số hiện tại
    golobalMax = Math.max(golobalMax, currMax)
  }

  return golobalMax
}

//tìm dãy con liên tiếp có tổng lớn nhất của mảng
/**
    Sử dụng quy hoạch động
    current_max = max(arr[i], current_max + arr[i])
    global_max = max(global_max, current_max)
 */
