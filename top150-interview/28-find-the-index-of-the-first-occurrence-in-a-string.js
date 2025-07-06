/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let isSubStr = false
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] === needle[j]) {
          isSubStr = true
        } else {
          isSubStr = false
          break
        }
      }
      if (isSubStr) {
        return i
      }
    }
  }
  return -1
}
