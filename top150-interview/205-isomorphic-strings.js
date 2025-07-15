/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        const sc = s[i];
        const tc = t[i];

        if (charMap[sc]) {
            if (charMap[sc] !== tc) {
                return false;
            }
        } else if (Object.values(charMap).includes(tc)) {
            return false;
        }
        charMap[sc] = tc;//lưu các cặp t, s
    }
    return true;    
};

/**
Hai chuỗi s và t được gọi là isomorphic nếu mỗi ký tự trong s có thể ánh xạ đến một ký tự duy nhất trong t, và ngược lại tức là không được có 2 ký tự khác nhau trong s cùng ánh xạ đến t
 */