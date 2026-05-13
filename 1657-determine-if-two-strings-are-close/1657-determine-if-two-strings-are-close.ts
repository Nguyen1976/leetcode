function closeStrings(word1: string, word2: string): boolean {
    if(word1.length !== word2.length) return false
    const map1 = new Map()
    const map2 = new Map()

    for(let i = 0; i < word1.length; i++) {
        map1.has(word1[i]) ? map1.set(word1[i], map1.get(word1[i]) + 1) : map1.set(word1[i], 1)
        map2.has(word2[i]) ? map2.set(word2[i], map2.get(word2[i]) + 1) : map2.set(word2[i], 1)
    }

    const arr1 = Array.from(map1).sort((a, b) => a[1] - b[1])
    const arr2 = Array.from(map2).sort((a, b) => a[1] - b[1])


    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i][1] !== arr2[i][1] || !map2.has(arr1[i][0])) return false
    }
    
    return true
};