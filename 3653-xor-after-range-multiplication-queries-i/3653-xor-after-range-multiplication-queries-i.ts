function xorAfterQueries(nums: number[], queries: number[][]): number {
    const MOD = 1e9 + 7
    for(let query of queries) {
        let idx = query[0]
        while(idx <= query[1]) {
            nums[idx] = (nums[idx] * query[3]) % MOD
            idx += query[2]
        }
    }

    return nums.reduce((acc, curr) => acc ^ curr, 0);
};