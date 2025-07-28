/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.replace(/\s+/g, ""); // loại bỏ khoảng trắng
    let stack = [];
    let num = 0;
    let sign = 1;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (!isNaN(c)) {
            num = 0;
            while (i < s.length && !isNaN(s[i])) {
                num = num * 10 + parseInt(s[i]);
                i++;
            }
            i--; // quay lại 1 bước vì for sẽ tăng tiếp
            result += sign * num;
        } else if (c === '+') {
            sign = 1;
        } else if (c === '-') {
            sign = -1;
        } else if (c === '(') {
            // đẩy kết quả tạm thời và dấu vào stack
            stack.push(result);
            stack.push(sign);
            // reset lại
            result = 0;
            sign = 1;
        } else if (c === ')') {
            // khi gặp dấu ) thì nhân kết quả hiện tại với dấu trước dấu (
            result = stack.pop() * result + stack.pop();
        }
    }

    return result;
};
