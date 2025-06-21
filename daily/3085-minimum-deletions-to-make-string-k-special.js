/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  const freqMap = new Map()

  for (let c of word) {
    if (freqMap.has(c)) {
      freqMap.set(c, freqMap.get(c) + 1)
    } else {
      freqMap.set(c, 1)
    }
  }

  const frequencies = Array.from(freqMap.values())
  let maxFreq = Math.max(...frequencies)

  let minDeletion = Infinity

  for (let target = 1; target <= maxFreq; target++) {
    //Dựa vào đây tìm ra các tần suất khả thi và tối ưu nhất
    //Và sẽ kiểm tra để các tuần suất năm trong khoảng [target, target + k] và kiểm tra các thay đổi
    //=> tìm min nhất của các trường hợp
    let deletions = 0

    for (const freq of frequencies) {
      if (freq < target) {
        deletions += freq //Nếu freq < target thì xóa toàn bộ tức là kí tự đo sẽ k còn xuất hiện
      } else if (freq > target + k) {
        deletions += freq - (target + k) // giảm xuống tối đa target + k hay nói cách khác là giảm ít kí tự nhất để đưa nó vào khoảng phù hợp
      }
      // nếu nằm trong khoảng [target, target + k] thì không cần xóa
    }

    minDeletion = Math.min(minDeletion, deletions)
  }

  return minDeletion
}

/**
    K special là: |freq(word[i]) - freq(word[j])| <= k  với mọi i, j
    Ý tưởng ta sẽ thổng kê tần suất xuất hiện của các char
 */
