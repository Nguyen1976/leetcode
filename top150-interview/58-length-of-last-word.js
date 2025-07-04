/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let isHaveEncountered = false
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] != ' ' && count === 0) isHaveEncountered = true
        if(s[i] != ' ') count ++
        if(s[i] === ' ' && isHaveEncountered) break
    }

    return count
};