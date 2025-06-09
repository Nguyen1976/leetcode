/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0
  const len = flowerbed.length
  if (n === 0) return true

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 0) {
      let prev = i === 0 || flowerbed[i - 1] === 0
      let next = i === len - 1 || flowerbed[i + 1] === 0

      if (prev && next) {
        count++
        flowerbed[i] = 1
        if (count >= n) return true
        i++ //next qua vì vị trí hợp lệ tiếp theo phải là i+=2
      }
    }
  }

  return false
}
