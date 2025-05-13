/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let canEatAll = (k) => {
    let hours = 0
    for (let pile of piles) {
      hours += Math.ceil(pile / k)
    }

    return hours <= h
  }

  let left = 1,
    right = Math.max(...piles)
  let result = right

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (canEatAll(mid)) {
      result = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return result
}

/**
 * Đề bài:
 * Có n đống chuối, koko sẽ ăn được k quả chuối trong mỗi giờ tại 1 đống bất kỳ
 * Và vệ binh sẽ quay trở lại trong h giờ
 * Tìm số k min số quả chuối cô ấy ăn được trong mỗi giờ để hết chuối sau h giờ
 *
 * Hiểu là có h lần ăn
 * Ý tưởng: Ta sẽ tìm k trong khoảng 1 -> max(piles)
 * Mỗi lần sẽ kiểm tra xem k có phù hợp k bằng hàm canEatAll O(n)
 * Thuật toán nhị phần để tìm k là O(logn)
 * => O(nlogn)
 */
