/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    for(let c of magazine) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }

    for(let c of ransomNote) {
        if(map.get(c) === 0 || !map.has(c)) return false
        map.set(c, map.get(c) - 1)
    }

    return true
};