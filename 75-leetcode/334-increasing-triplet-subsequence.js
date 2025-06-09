/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity
  let second = Infinity

  for (num of nums) {
    if (num <= first) {
      first = num
    } else if (num <= second) {
      second = num
    } else {
        return true
    }
  }

  return false
}

//ý tưởng:
//xác định số đầu và số thứ 2 trước tức là mỗi lần lặp sẽ luôn chọn ra số thứ 1 và số thứ 2 đúng chỉ cần num hiện tại lớn hơn 2 số đó thì sẽ được bộ 3
//Đề bài không yêu cầu là cả 3 số phải liên tiếp

console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))
