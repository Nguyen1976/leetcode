/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stk = []
  for (let c of s) {
    c === '*' ? stk.pop() : stk.push(c)
  }

  return stk.join('')
}

console.log(
  '🚀 ~ 2390-removing-stars-from-a-string.js:6 ~ removeStars:',
  removeStars('leet**cod*e')
)
