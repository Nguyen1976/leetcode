/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let total = roman[s[0]]
    for(let i = 1; i < s.length; i++) {
        if(roman[s[i]] > roman[s[i - 1]]) {
            total -= 2 * roman[s[i - 1]]
        }
        total += roman[s[i]]
    }

    return total
};

/**
    Example: "MCMXCIV"
    khi một số trước nhỏ hơn số sau thì đó là phép trừ
    Ta sẽ lặp tuyến tính và cộng vào total và luôn kiểm tra nếu số hiện tại mà lớn hơn số trước đó thì total sẽ trừ đi số trước đó 2 lần và cộng số hiện tại
 */