/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(' ')
  if (arr.length !== pattern.length) return false
  let map = {}

  for (let i = 0; i < pattern.length; i++) {
    let patternC = pattern[i]
    let sc = arr[i]

    if (map[patternC]) {
      if (map[patternC] !== sc) return false
    } else if (Object.values(map).includes(sc)) {
      return false
    }

    map[patternC] = sc
  }

  return true
}
