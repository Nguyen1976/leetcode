/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  var array = []
  var n = Math.max(word1.length, word2.length)
  for (let i = 0; i < n; i++) {
    if (i < word1.length) {
      array.push(word1[i])
    }
    if (i < word2.length) {
      array.push(word2[i])
    }
  }

  return array.join('')
}
