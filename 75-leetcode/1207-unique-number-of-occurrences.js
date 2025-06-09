/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map()

  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  let set = new Set()
  for (let [_, value] of map) {
    set.add(value)
  }

  return map.size === set.size
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))

//Ý tưởng:
/**
 * Dùng map để lưu các cặp (value, số lần suất hiện)
 * Sau đó lặp qua map và đưa các số lần xuất hiện vào trong set, khi lặp qua sẽ đếm số lần lặp qua
 * Sau đó so sánh số lần lặp qua với size của set nếu khác nhau sẽ là false
 */
