/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const arr = s.split('')

  let left = 0,
    right = s.length - 1

  while (left < right) {
    while (left < right && !vowels.has(arr[left])) left++
    while (left < right && !vowels.has(arr[right])) right--

    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }

  return arr.join('')
}
