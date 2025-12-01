function isPalindrome(x: number): boolean {
    let s = String(x)

    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        if(s[i] !== s[s.length - i - 1]) {
            return false
        }
    }

    return true
};