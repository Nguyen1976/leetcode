/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const n = nums.length;

  // Chạy từ đầu đến sát phần tử cuối cùng
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Giả sử phần tử ở vị trí i là nhỏ nhất

    // Duyệt phần mảng còn lại để tìm giá trị nhỏ thực sự
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j; // Cập nhật lại vị trí của số nhỏ nhất
      }
    }

    // Nếu tìm thấy số nhỏ hơn, tiến hành hoán đổi (swap)
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
};