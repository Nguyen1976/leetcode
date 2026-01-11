function combinationSum2(candidates: number[], target: number): number[][] {
    let results = []
    candidates.sort((a, b) => a - b);

    let backtrack = (start, remain, path) => {
        if(remain === 0) {
            results.push([...path])
            return
        }

        for(let i = start; i < candidates.length; i++) {
            //trong cùng 1 tầng thì k để trùng nhau tránh tạo ra kết quả duplicate
            //tức tầng này bắt đầu từ 1 thì vòng lặp sau bắt đầu từ 1 gây ra duplicate
            if (i > start && candidates[i] === candidates[i - 1]) continue

            if (candidates[i] > remain) break

            path.push(candidates[i])

            backtrack(i + 1, remain - candidates[i], path)

            path.pop()
        }
    }

    backtrack(0, target, [])

    return results
};