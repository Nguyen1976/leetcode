function sortArray(nums: number[]): number[] {
    // Điều kiện dừng: mảng có 1 hoặc 0 phần tử thì đã coi là sắp xếp xong
  if (nums.length <= 1) {
    return nums;
  }

  // Tìm điểm chính giữa để chia đôi mảng
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  // Gọi đệ quy và gộp 2 mảng đã sắp xếp
  return merge(sortArray(left), sortArray(right));
}

/**
 * Hàm phụ trợ để gộp 2 mảng đã sắp xếp thành 1 mảng sắp xếp
 */
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  // So sánh từng phần tử của 2 mảng và đưa phần tử nhỏ hơn vào mảng kết quả
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Đưa các phần tử còn sót lại (nếu có) vào mảng kết quả
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}