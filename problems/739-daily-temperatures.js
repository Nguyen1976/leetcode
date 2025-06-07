/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0)
    let stack = []//Lưu chữ chỉ số của các ngày use push and pop

    for(let i = 0; i < temperatures.length; i++) {
        /*
            logic:
            Khi ngăn xếp rỗng sẽ push phần tử đó vào nếu ngăn xếp có thì sẽ kiểm tra nhiệt độ ngày hiện tại mà lớn hơn  đỉnh ngăn xếp tức là ngày tại vị trí đỉnh ngăn xếp sẽ phải đợi ngày hiện tại trừ đi ngày tại đỉnh ngăn xếp sẽ ra số ngày đợi
            Tức là ngăn xếp sẽ lưu các ngày đã qua khi gặp 1 ngày mà nó ấm hơn ngày trong ngăn xếp thì thực hiện tính toán
            Ví dụ mảng giảm dần và có 1 phần từ lớn nhất ở cuối thì stack sẽ thêm hết cho đến phần tử gần cuối và thực hiện while tính toán cho đến phần tử lớn nhất ở cuối công thực là vị trí nhiệt độ ngắn xếp bằng vị trí đang ở hiện tại trừ đi vị trí trong ngăn xếp
        */
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop()
            result[idx] = i - idx
        }
        stack.push(i)
    }

    return result
};

/*
    answer[i] là số ngày phải đợi sau ngày thứ i để thời tiết ấm hơn 
*/