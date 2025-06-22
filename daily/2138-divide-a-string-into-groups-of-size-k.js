/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let result = []
    let i = 0
    while(i < s.length) {
        result.push(s.slice(i, i + k))
        i += k
    }

    //lấp đầy phần tử cuối của mảng bằng fill
    result[result.length - 1] += fill.repeat(k - result[result.length - 1].length)

    return result
};
