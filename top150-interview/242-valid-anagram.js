/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    let mapS = new Map()
    let mapT = new Map()
    for(let i = 0; i < s.length; i++) {
        mapS.set(s[i], mapS.has(s[i]) ? mapS.get(s[i]) + 1 : 1)
        mapT.set(t[i], mapT.has(t[i]) ? mapT.get(t[i]) + 1 : 1)
    }

    for(let [key, value] of mapS) {
        if(!mapT.has(key) || mapT.get(key) !== value) return false

    }

    return true

};