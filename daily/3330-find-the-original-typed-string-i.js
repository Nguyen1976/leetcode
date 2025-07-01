/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let count = 1
    for(let i = 0; i < word.length; i++) {
        let countCharact = 1
        while(word[i] === word[i + 1] && i < word.length) {
            countCharact++
            i++
        }
        if(countCharact > 1) {
            count += countCharact - 1
        }
    }
    return count
};

/**
Alice đang cố gắng nhập một chuỗi cụ thể trên máy tính của mình. Tuy nhiên, cô ấy có xu hướng vụng về và có thể nhấn phím quá lâu, dẫn đến một ký tự được gõ nhiều lần. Mặc dù Alice đã cố gắng tập trung vào việc đánh máy của mình, cô nhận thức được rằng cô vẫn có thể đã làm điều này nhiều nhất một lần. Bạn được cung cấp một từ chuỗi, đại diện cho đầu ra cuối cùng được hiển thị trên màn hình của Alice. Trả về tổng số chuỗi ban đầu có thể mà Alice có thể có ý định gõ.

ví dụ: "abbcccc"

trường hợp 1 không gõ nhầm
trường hợp tiếp theo thì cô ấy k gõ nhầm hoặc muốn gõ b 1 lần
trường hợp tiếp thì cô ấy k gõ nhầm hoặc chỉ muốn gõ c 3 lần

có thể dùng map để lưu chữ số lần lặp của các ký tự

 */