/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0,
    prefix = 0

  for (let g of gain) {
    prefix += g
    max = Math.max(max, prefix)
  }

  return max
}

//Tóm tắt
/*
Gain là biểu thị độ cao thay đổi tại mỗi tuyến đường
tức là gain[i] < 0 thì là đi xuống và ngược lại
Việc chúng ta tìm là người ta đạt được độ cao cao nhất là bao nhiêu
*/
