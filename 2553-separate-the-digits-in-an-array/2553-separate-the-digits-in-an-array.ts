function separateDigits(nums: number[]): number[] {
    const ans: number[] = []

    for (const num of nums) {
        if (num < 10) {
            ans.push(num)
        } else {
            for (const c of String(num)) {
                ans.push(Number(c))
            }
        }
    }

    return ans
}