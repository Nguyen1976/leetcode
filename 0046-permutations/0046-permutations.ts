function permute(nums: number[]): number[][] {
    const res = []
    let used = new Array(nums.length).fill(false)

    const backtrack = (path) => {
        if(path.length === nums.length) {
            res.push([...path])
            return
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i]) continue

            path.push(nums[i])
            used[i] = true

            backtrack(path)

            path.pop()
            used[i] = false
        }
    }

    backtrack([])

    return res
};