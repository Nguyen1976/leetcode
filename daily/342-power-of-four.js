/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return Number.isInteger(Math.log(n) / Math.log(4))
};

//x = log 4 của n