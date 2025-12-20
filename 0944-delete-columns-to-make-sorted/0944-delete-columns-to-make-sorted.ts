function minDeletionSize(strs: string[]): number {
    function isSortedString(s: string) {
        for (let i = 1; i < s.length; i++) {
            if (s[i] < s[i - 1]) return false;
        }
        return true;
    }

    let n = strs.length, res = 0
    for(let i = 0; i < strs[0].length; i++) {
        let s = ''
        for(let j = 0; j < n; j++) {
            s += strs[j][i]
        }
        if(!isSortedString(s)) res++
    }

    return res
};