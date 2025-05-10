/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// var successfulPairs = function (spells, potions, success) {
//   const result = []

//   for (let i = 0; i < spells.length; i++) {
//     let count = 0 //đếm số parir successfully
//     for (let j = 0; j < potions.length; j++) {
//       if (spells[i] * potions[j] >= success) count++
//     }
//     result.push(count)
//   }

//   return result
// }

// var successfulPairs = function (spells, potions, success) {
//   const result = []

//   potions.sort((a, b) => a - b) //tăng dần

//   for (let i = 0; i < spells.length; i++) {
//     let found = false
//     for (let j = 0; j < potions.length; j++) {
//       if (spells[i] * potions[j] >= success) {
//         result.push(potions.length - j)
//         found = true
//         break
//       }
//     }
//     if (!found) {
//       result.push(0) // nếu không tìm được cặp nào
//     }
//   }

//   return result
// }

var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  const n = potions.length;
  const result = [];

  for (let spell of spells) {
    let left = 0, right = n;

    // Tìm vị trí đầu tiên sao cho spell * potions[mid] >= success
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (spell * potions[mid] >= success) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    // Số potion phù hợp = từ vị trí left đến hết mảng
    result.push(n - left);//left right đều đúng
  }

  return result;
}

/**
 * Làm cách thông thường thf sẽ time limit vì là O(n*m)
 * Ý tưởng: sort potions tốn O(nlogn) (time limit)
 * Hoàn thành với O(mlogm + n*logm) = O((n + m)logm)
 */

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7))
