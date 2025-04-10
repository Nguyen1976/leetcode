/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let map = new Map()
  let count = 0

  for (let num of nums) {
    let search = k - num
    if (map.has(search) && map.get(search) > 0) {
      map.set(search, map.get(search) - 1)
      count++
    } else {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1)
      } else {
        map.set(num, 1)
      }
    }
  }

  return count
}
console.log(
  '🚀 ~ 1679-max-number-of-k-sum-pairs.js:22 ~ maxOperations:',
  maxOperations([1, 2, 3, 4], 5)
)

//Ý tưởng:
//Sử dụng map mỗi lần lặp sẽ tìm kiếm k - num trong map nếu k có thì sẽ thêm num hiện tại
//Map sẽ lưu dưới dạng là (num, số lần num đang lưu trũ)
//Tức là (2, 2)tức là số 2 xuất hiện 2 lần

//Ý tưởng 2:
//Sử dụng sort(nlogn) để sắp xếp và sau đó dùng two pointer (left và right)

//Cả 2 cách để ổn những vì bài này mảng có thể dược và không sắp xếp
//Lên dùng map tối ưu hơn vì time complexity = O(n) thay vì O(nlogn)
//Nhưng space complexity sẽ là O(n)

//Còn two pointer sẽ là O(nlogn) và O(1) (space complexity tối ưu hơn)
