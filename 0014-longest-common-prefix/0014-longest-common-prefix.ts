function longestCommonPrefix(strs: string[]): string {
    let prefix = ''
    for(let i = 0; i < 1000; i++) {
        let isCommon = true
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== strs[j - 1][i]) {
                isCommon = false
                break
            }
        }
        if(!isCommon) {
            break
        } else {
            if(strs[0][i] === undefined) break
            prefix += strs[0][i]
        }
    }

    return prefix
};