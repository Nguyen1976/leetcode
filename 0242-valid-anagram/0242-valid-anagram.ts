function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    const mapS = new Map<string, number>()
    const mapT = new Map<string, number>()
    
    for(let i = 0; i < s.length; i++) {
        mapS.set(s[i], mapS.has(s[i]) ? mapS.get(s[i]) + 1 : 1)
        mapT.set(t[i], mapT.has(t[i]) ? mapT.get(t[i]) + 1 : 1)
    }

    for(let [key, val] of mapS) {
        if((mapT.get(key) || 0) !== val) return false
    }

    return true
};