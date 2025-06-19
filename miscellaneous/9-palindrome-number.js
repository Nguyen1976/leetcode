/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = String(x)
    let i = 0, j = s.length - 1
    while(i < j) {
        if(s[i] !== s[j]) return false
        i++
        j--
    }
    return true
};