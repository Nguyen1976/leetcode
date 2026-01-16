function makeSmallestPalindrome(s: string): string {
    const n = s.length
    const ans = Array(n).fill('')

    for (let right = n - 1, left = 0; right >= right / 2; right--, left++) {
        if (s[left] <= s[right]) {
            ans[left] = s[left]
            ans[right] = s[left]
        } else {
            ans[left] = s[right]
            ans[right] = s[right]
        }
    }

    return ans.join('')
};