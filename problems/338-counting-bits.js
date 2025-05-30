/**
 * @param {number} n
 * @return {number[]}
 */


var countBits = function(n) {
    let result = Array(n + 1).fill(0)
    let convertNumberToStringToResult = (number) => {
        let sum = 0
        while(number > 0) {
            sum += number % 2
            number = Math.floor(number / 2)
        }
        return sum
    }

    for(let i = 1; i <= n; i++) {
        result[i] = convertNumberToStringToResult(i)
    }

    return result;
};

