function numberOfSpecialChars(word: string): number {
    const map = new Map<string, number>()
    for(let c of word) {
        if(c >= 'a' && c <= 'z') {
            if(!map.has(c)) {
                map.set(c, 1)
            } 
            if(map.has(c) && map.has(c.toUpperCase())) {
                map.set(c, 0)
            }
        } else {
            if(map.has(c.toLowerCase()) && map.get(c.toLowerCase()) > 0) {
                map.set(c.toLowerCase(), 2)
            }
            map.set(c, 1)
        }
    }

    return Array.from(map.values()).reduce((acc, curr) => curr >= 2 ? acc + 1 : acc ,0)
};