function combinationSum(candidates: number[], target: number): number[][] {
    const n = candidates.length
    const results = []

    const backtrack = (idx: number, path: number[], total: number) => {
        if(total === target) {
            results.push([...path])
            return
        }
        if (total > target) {
            return;
        }
        for(let i = idx; i < n; i++) {
            path.push(candidates[i])
            backtrack(i, path, total + candidates[i])
            path.pop()
        }
    }

    backtrack(0, [], 0)

    return results
};