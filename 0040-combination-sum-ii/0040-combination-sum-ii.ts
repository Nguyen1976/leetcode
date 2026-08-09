function combinationSum2(candidates: number[], target: number): number[][] {
    const n = candidates.length;
    const results: number[][] = [];
    candidates.sort((a, b) => a - b)

    const backtrack = (idx: number, path: number[], total: number) => {
        if (total === target) {
            results.push([...path]);
            return;
        }
        
        if (total > target) {
            return;
        }

        for (let i = idx; i < n; i++) {
            if (i > idx && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            
            backtrack(i + 1, path, total + candidates[i]);
            
            path.pop();
        }
    }

    backtrack(0, [], 0);

    return results;
};