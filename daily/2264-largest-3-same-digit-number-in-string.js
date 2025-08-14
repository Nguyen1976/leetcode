/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let temp = ""
    for(let i = 0; i < num.length - 2; i++) {
        if(num[i] === num[i + 1] && num[i] === num[i + 2]) {
            temp = temp > num[i] ? temp : num[i]
        }
    }
    return temp.repeat(3)
};