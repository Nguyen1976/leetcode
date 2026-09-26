function groupAnagrams(strs: string[]): string[][] {
    const result = []
    const map = new Map()
    
    for(let i = 0; i < strs.length; i++) {
        const strsConverted = strs[i].split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
        if(!map.has(strsConverted)) {
            map.set(strsConverted, [strs[i]])
        } else {
            map.get(strsConverted).push(strs[i])
        }
    }
    for(let [key, val] of map) {
        result.push(val)
    }

    return result
};