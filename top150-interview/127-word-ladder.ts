function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const diffInOneCharacter = (word1: string, word2: string): boolean => {
    let diff = 0
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        diff++
      }
      if (diff > 1) return false
    }
    return true
  }

  const wordBank = new Set(wordList)

  if (!wordBank.has(endWord)) return 0

  const queue: [string, number][] = [[beginWord, 1]]

  while (queue.length) {
    const [word, steps] = queue.shift()!
    if (word === endWord) return steps

    for (const nextWord of Array.from(wordBank)) {
      if (diffInOneCharacter(word, nextWord)) {
        queue.push([nextWord, steps + 1])
        wordBank.delete(nextWord)
      }
    }
  }

  return 0
}

/**ý tưởng làm bài giống bài 433 đột biến gen và word list là ngân hàng đột biến */
