function combinationSum(candidates: number[], target: number): number[][] {
  let result = new Set<string>()

  let backtracking = (currTotal: number = 0, path: number[]) => {
    if (currTotal === target) {
      result.add([...path].sort((a, b) => a - b).join(','))
      return
    } else if (currTotal > target) {
      return
    }

    for (let candidate of candidates) {
      path.push(candidate)
      backtracking(currTotal + candidate, path)
      path.pop()
    }
  }

  backtracking(0, [])

  //convert ['12', '123'] to [[1, 2, 3], [1, 2]]
  return Array.from(result).map((e) =>
    e.split(',').map((num) => Number(num))
  ) as number[][]
}
