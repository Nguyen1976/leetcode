function subsetXORSum(nums: number[]): number {
    let ans = 0
    const n = nums.length

    const dfs = (i: number, xor: number) => {
        if(i === n) {
            ans += xor
            return 
        }

        dfs(i + 1, xor)

        dfs(i + 1, xor ^ nums[i])
    }

    dfs(0, 0);
    return ans
};