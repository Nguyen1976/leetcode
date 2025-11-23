function maxSumDivThree(nums: number[]): number {
    const memo = Array.from({length: nums.length}, () => Array(3).fill(undefined))
    
    const dp = (pos: number, mod: number): number => {
        if(pos === nums.length) return mod === 0 ? 0 : -Infinity
        if(memo[pos][mod] !== undefined) return memo[pos][mod]

        //trường hợp bỏ qua nums[pos]
        let ans = dp(pos + 1, mod) //lặp sang pos mới

        //trường họp chọn nums[pos]
        const newMod = (mod + nums[pos]) % 3
        ans = Math.max(ans, nums[pos] + dp(pos + 1, newMod))

        memo[pos][mod] = ans;

        return ans
    }

    return dp(0, 0)
};

/*
Suy nghĩ với cách dp 
Biểu thị trạng thái là DP[pos][mod]
hiểu là pos là vị trí bắt đầu
và mod là phần dư khi mà chia cho 3 tức nó có thể là 0, 1, 2
DP[pos][mod]: tổng tối đa có thể chia hết cho 3 bắt đầu từ pos và dư mod

dp sẽ bắt đầu từ 0, 0
*/