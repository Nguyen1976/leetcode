/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  for (let c of s) {
    if (Object.keys(mapping).includes(c)) {
      if (stack.length === 0 || stack[stack.length - 1] !== mapping[c]) {
        return false
      }
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
}
