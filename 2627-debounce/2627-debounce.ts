type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timer: ReturnType<typeof setTimeout>
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms

cho 1 fn và time là t trả về hàm debounced
1 hàm debounced là 1 hàm có quá trình thực thi bị trì hoãn khoảng 1 mili s và quá trình thực thi của nó bị hủy nếu gọi lại trong thời gian đó. Hàm được gỡ lỗi cũng sẽ nhận được các tham số đã truyền

ví dụ t = 50s và hàm dược gọi ở 30 60 100
e lệnh đầu tiên sẽ bị hyyx và gọi lệnh ở thứ 3 sẽ được thực thi ở 150ml

nếu t = 35 thì cuộc gọi đầu tiên sẽ bị hủy cuộc gọi thứ 2 sẽ được thực thi ở 95 và cuộc gọi thứ 3 là ở 135

 */