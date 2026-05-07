function maxValue(nums: number[]): number[] {
    const n = nums.length;
    const res: number[] = [nums[0]];
    for (let i = 1; i < n; i++) {
        res.push(Math.max(res[res.length - 1], nums[i]));
    }
    let min_idx = n - 1;
    for (let i = n - 2; i >= 0; i--) {
        if (res[i] > nums[min_idx]) {
            res[i] = res[min_idx];
        }
        if (nums[i] < nums[min_idx]) {
            min_idx = i;
        }
    }

    return res;
}
/**
cho mảng nums từ i có thể nhảy đến j theo luật dưới đây
nhẩy tới idx j với j > i và cho phép nếu nums[j] < nums[i]
nhẩy tới idx j với j < i và cho phép nếu nums[j] > nums[i]

tại mỗi i tìm giá trị lớn nhất trong nums mà có thể tới theo rule
trả về mảng ans tại ans[i] là giá trị lớn nhất có thể đạt được bắt đầu từ idx i

ví dụ brute force
 */