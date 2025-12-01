function titleToNumber(columnTitle: string): number {
    let result = 0
  for (let i = 0; i < columnTitle.length; i++) {
    const charPos = columnTitle.charCodeAt(i) - 64
    result = result * 26 + charPos
  }
  return result
};