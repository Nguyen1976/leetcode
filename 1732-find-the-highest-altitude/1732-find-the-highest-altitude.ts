function largestAltitude(gain: number[]): number {
    let max = 0,
    prefix = 0

  for (let g of gain) {
    prefix += g
    max = Math.max(max, prefix)
  }

  return max
};