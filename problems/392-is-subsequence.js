/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let idxS = 0
  let idxT = 0

  while (idxS < s.length && idxT < t.length) {
    if(s[idxS] === t[idxT]) {
        idxS++
    }
    idxT++
  }

  return idxS === s.length
}

//Ý tưởng:
//dùng 2 con trỏ để kiểm soát 2 string
//mỗi lần con trỏ s ở vị trí mới thì con trỏ t phải tìm ra giá trị thích hợp
//Nếu tìm thấy giá trị thích hợp thì sẽ chuyển con trỏ s sang vị trí mới
//sau khi duyệt qua thì kiểm tra xem s đã được lặp qua hết chưa nếu r tức là đúng còn không thì là sai

console.log(
  '🚀 ~ 392-is-subsequence.js:9 ~ isSubsequence:',
  isSubsequence('aaaaaa', 'bbaaaa')
)
