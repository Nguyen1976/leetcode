/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = []

    const backtrack = (start, path, target) => {
        if(path.length === k && target === 0) {//Nếu như path đã đủ và mục tiêu là 0 thì nó đúng
            result.push([...path])//phải clone path để khi động vào path lần tiếp theo k làm thay đổi result
            return
        }
        if(path.length > k || target < 0) return//Nếu nó vượt qua k hoặc target bị trừ quá thì dừng
        for(let i = start; i < 10; i++) {//Ví dụ ở vòng lặp đầu tiên là 1 thì ở cái backtrack tiếp theo sẽ chạy từ 2 đảm bảo các só khác nhau
            path.push(i)//Thêm i vào 
            backtrack(i + 1, path, target - i)//kiểm tra xem kết quả khi thêm i có đúng k và ở cái đệ quy tiếp theo nó sẽ thử thêm i hoặc dừng lại
            path.pop()//bỏ phần tử i hiện tại mục đích là mình đã thử với các phần tử i là start rồi phải bỏ i ra về tiếp tục ở các phần tiếp theo đúng như tính chất của backtrack(quay lui)
        }
    }

    backtrack(1, [], n)
    return result
};

/**
 * Bài toán tìm k số khác nhau có tổng bằng n nếu không tìm thấy return về []
 * k thuộc [2, 9] và các số k chỉ từ [1, 9]
 * 
 * Sử dụng backtrack nó sẽ liên tục tạo ra các nhóm có k số khác nhau và luôn kiểm tra hợp lệ không nếu hợp lệ sẽ push
 */