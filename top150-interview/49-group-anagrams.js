/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length <= 1) return [strs]
    let map = {}// lưu dưới dạng : "123": ["123", "321", ...] (key phải được sort)

    for(let s of strs) {
        let key = s.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(s);
    }

    return Object.values(map)
};