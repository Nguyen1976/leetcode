function minimumDeletions(nums: number[]): number {
    const n = nums.length
    let min = 0, max = 0, minVal = Infinity, maxVal = -Infinity
    for(let i = 0; i < n; i++) {
        if(nums[i] < minVal) {
            min = i
            minVal = nums[i]
        }
        if(nums[i] > maxVal) {
            max = i
            maxVal = nums[i]
        }
    }

    return Math.min(
        Math.min(min, max) + 1 + (n - Math.max(min, max)),
        n - Math.min(min, max),
        Math.max(min, max)  + 1
    )
};

/*
cần phải xác định vị trí của số nhỏ nhất và số lớn nhất (O(n))
đưa ra nhưunxg hướng giải như sau đầu tiên là chỉ xóa trước, chỉ xóa sau, xóa cả trước và sau 
sau đó so sánh các kết quả với nhau
ví dụ ta có tại index 5 và 1
nếu xóa từ trước thì sẽ phải xóa từ 0 đến 5 kết quả là 6
nếu xóa từ sau sẽ là n - 1 = 8 - 1 kết quả là 7
nếu xóa từ trước và sau tức số nào idx nhỏ hơn thì xóa từ trước idx lớn hơn xóa từ sau
ta có 5 và 1 
vậy 1 xóa từ trước sẽ được 1 + 1 = 2
5 xóa từ sau sẽ là n - 5 = 3 tổng lại là 5
=> được công thức nếu ta có biến min và max
Math.min(min, max) + 1 + (n - Math.max(min, max))
so sánh với cả 3 ta sẽ được Math.min(
Math.min(min, max) + 1 + (n - Math.max(min, max)),
n - Math.min(min, max)
Math.max(min, max)  + 1
)

*/