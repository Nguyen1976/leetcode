/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  //greedy
  let totalTank = 0 //kiểm tra xem có tồn tại giải pháp hay tổng gas có đủ để di chuyển hết hay không
  let currTank = 0
  let start = 0
  for (let i = 0; i < gas.length; i++) {
    totalTank += gas[i] - cost[i]
    currTank += gas[i] - cost[i]

    if (currTank < 0) {
      //tức là đang không thể đi tiếp
      start = i + 1 //start luôn được gán cho 1 bước đi hợp lệ
      currTank = 0
    }
  }

  return totalTank >= 0 ? start : -1
}
/**
    Số lượng khí gas tại trạm i là gas[i]
    bạn có chiếc xe với bình xăng không giới hạn và số lượng xăng để đi từ trạm i đến trạm i + 1 là cost[i]
    Bạn bắt đầu hành trình với bình xăng trống tại 1 trạm ga
    Cho 2 mảng gas và cost, trả về index của trạm xăng bắt đầu nếu bạn có thể đi xung quanh 1 mạch lần theo chiều kim đồng hồ. Nếu không thì trả về -1. Nếu tồn tại giải pháp thì nó đảm bảo là duy nhất


    Tóm tắt lại:
    Ở mỗi trạm i ta sẽ được nạp gas[i] và chi phí để đến trạm i + 1 là cost[i]
    Tìm điểm bắt đầu để có thể đi từ trạm 1 và quay trở lại nó
 */
