function canReach(s: string, minJump: number, maxJump: number): boolean {
    const n = s.length
    const dp = new Array(n).fill(false)

    dp[0] = true

    let pre = 0

    for (let i = 1; i < n; i++) {

        // thêm phần tử mới vào window
        if (i - minJump >= 0 && dp[i - minJump]) {
            pre++
        }

        // bỏ phần tử ra khỏi window
        if (i - maxJump - 1 >= 0 && dp[i - maxJump - 1]) {
            pre--
        }

        // có ít nhất 1 vị trí reachable
        if (pre > 0 && s[i] === '0') {
            dp[i] = true
        }
    }

    return dp[n - 1]
}