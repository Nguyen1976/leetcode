function countPrefixes(words: string[], s: string): number {
    let res = 0
    for(let word of words) {
        if(word === s.slice(0, word.length)) {
            res++
        }
    }
    return res
};