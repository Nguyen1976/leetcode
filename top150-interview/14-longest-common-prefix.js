/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = strs[0]

  let getCommonPrefix = (str1, str2) => {
    let minLength = Math.min(str1.length, str2.length)
    let prefix = ''

    for (let i = 0; i < minLength; i++) {
      if (str1[i] === str2[i]) {
        prefix += str1[i]
      } else {
        break
      }
    }

    return prefix
  }

  for (let i = 1; i < strs.length; i++) {
    res = getCommonPrefix(res, strs[i])
  }

  return res
}
/**
    Duyệt tuyến tính mỗi lần gặp 1 chuỗi sẽ bỏ đi những từ nó k nằm trong chuỗi kia
 */
