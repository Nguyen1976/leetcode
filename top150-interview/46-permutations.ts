function permute(nums: number[]): number[][] {
  let result: number[][] = []

  let backtracking = (path: number[]): void => {
    if (path.length === nums.length) {
      result.push([...path])
      return
    }
    for (let num of nums) {
      if (!path.includes(num)) {
        path.push(num)
        backtracking(path)
        path.pop()
      }
    }
  }
  backtracking([])

  return result
}
