const diffInOneCharacter = (gene1: string, gene2: string) => {
  let diff = 0
  for (let i = 0; i < gene1.length; i++) {
    if (gene1[i] !== gene2[i]) {
      diff += 1
    }

    if (diff > 1) {
      return false
    }
  }

  return true
}
function minMutation(
  startGene: string,
  endGene: string,
  bank: string[]
): number {
  const geneBank = new Set(bank)

  if (!geneBank.has(endGene)) {
    return -1
  }

  const queue: [string, number][] = [[startGene, 0]]

  while (queue.length) {
    const [gene, steps] = queue.shift()!
    if (gene === endGene) {
      return steps
    }

    //cho đột biến thành tất cả phần tử trong bank nếu có thể nếu phần tử đã đột biến thành rồi thì sẽ xóa ra khỏi geneBank để tránh đột biến vô tận
    for (const nextGene of Array.from(geneBank)) {
      if (diffInOneCharacter(gene, nextGene)) {
        queue.push([nextGene, steps + 1])
        geneBank.delete(nextGene)
      }
    }
  }

  return -1
}
