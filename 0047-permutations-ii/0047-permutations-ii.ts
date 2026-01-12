function permuteUnique(nums: number[]): number[][] {
    let result = []
    let used = new Array(nums.length).fill(false)
    nums.sort((a, b) => a - b)

    let backtrack = (path) => {
        if(path.length === nums.length) {
            result.push([...path])
            return
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

            used[i] = true
            path.push(nums[i])

            backtrack(path)

            used[i] = false
            path.pop()
        }
    }

    backtrack([])

    return result
};