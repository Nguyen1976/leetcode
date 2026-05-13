function closeStrings(word1: string, word2: string): boolean {
    if(word1.length !== word2.length) return false
    const map1 = new Map()
    const map2 = new Map()

    for(let i = 0; i < word1.length; i++) {
        map1.has(word1[i]) ? map1.set(word1[i], map1.get(word1[i]) + 1) : map1.set(word1[i], 1)
        map2.has(word2[i]) ? map2.set(word2[i], map2.get(word2[i]) + 1) : map2.set(word2[i], 1)
    }

    if(map1.size !== map2.size) return false

    for (const key of map1.keys()) {
        if (!map2.has(key)) return false;
    }

    const arr1 = Array.from(map1.values()).sort((a, b) => a - b)
    const arr2 = Array.from(map2.values()).sort((a, b) => a - b)


    
    return JSON.stringify(arr1) === JSON.stringify(arr2)
};