/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0,
    end = 0,
    len = nums.length
  let count = 0
  let maxSubString = 0

  while (end < len) {
    if (nums[end] === 0) count++

    while (count > 1) {
      if (nums[start] === 0) count--//vì nếu end nó lặp đến số 0 thứ 2 
      //thì start phải lặp qua cái số 0 đó
      start++
    }

    maxSubString = Math.max(maxSubString, end - start) //Vì phải xóa phần tử 0 thay vì được phép lật 0 thành 1 như bài 1004
    end++
  }

  return maxSubString
}

//Gần giống với 1004
