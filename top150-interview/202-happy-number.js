/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set()
    while(!seen.has(n)) {
        seen.add(n)
        let numberToString = "" + n
        let total = 0
        for(let i = 0; i < numberToString.length; i++) {
            total += Math.pow(Number(numberToString[i]), 2)
        }

        if(total === 1) return true
        n = total
    }

    return false
};