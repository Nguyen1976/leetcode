function isTrionic(nums: number[]): boolean {
    if (nums.length < 4 || nums[0] >= nums[1]) return false;
    let flips = 0;
    for (let i = 1, dir = 1, n = nums.length; i < n; i++) {
        if (dir * nums[i - 1] > dir * nums[i]) flips++, dir *= -1;
        if (nums[i - 1] === nums[i] || flips > 2) return false;
    }
    return flips == 2;
};

/**
Thuật toán

Nếu n < 4 → return false
(Vì cần ít nhất 4 phần tử để có 3 đoạn)😏😏😏

Tăng i khi nums[i] > nums[i-1]
→ kết thúc phase tăng đầu tiên → vị trí p

Kiểm tra có thực sự tăng không
(nếu i == 1 thì không có đoạn tăng đầu)

Giảm i khi nums[i] < nums[i-1]
→ kết thúc phase giảm → vị trí q

Kiểm tra có thực sự giảm không

Tăng lại khi nums[i] > nums[i-1]

Cuối cùng nếu i == n → hợp lệ

 */