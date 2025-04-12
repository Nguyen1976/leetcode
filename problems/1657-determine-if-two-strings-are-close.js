/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  let map1 = new Map()
  let map2 = new Map()


  for (let c of word1) map1.set(c, (map1.get(c) || 0) + 1)
  for (let c of word2) map2.set(c, (map2.get(c) || 0) + 1)

  if (map1.size !== map2.size) {
    return false
  }

  //Điều kiện là phải trùng lặp key
  let keys1 = [...map1.keys()].sort().join('')
  let keys2 = [...map2.keys()].sort().join('')
  if(keys1 !== keys2) return false

  //Đoạn này là mảng các số nhưng khi join vào sẽ tiết kiện được 1 vòng O(n)
  let values1 = [...map1.values()].sort().join('')
  let values2 = [...map2.values()].sort().join('')
  if(values1 !== values2) return false

  return true
}

console.log(closeStrings('abc', 'cba'))

/**
 * 2 chuỗi được coi là gần nếu bạn có thể đạt được cái này từ cái kia bằng cách sử dụng các hoạt động sau
Hoạt động 1: Trao đổi bất kỳ hai ký tự hiện có
Hoạt động 2: Chuyển đổi mọi sự xuất hiện của một ký tự hiện có thành một ký tự hiện có khác và làm tương tự với ký tự khác
 */

//Ý tưởng giải bài này sẽ đếm số lần xuất hiện của cả 2 chuỗi nếu số lần xuất hiện nó trùng nhau => return true
//Và thiếu điều kiện nữa là tập ký tự của 2 bên là phải giống nhau nữa
