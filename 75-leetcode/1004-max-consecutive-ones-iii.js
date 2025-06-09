/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0, end = 0;
    let max = 0;
    let count = 0;

    while(end < nums.length) {
        if(nums[end] === 0) count++;
        while(count > k) {
            if (nums[start] === 0) count--;
            start++;
        }
        max = Math.max(end - start + 1, max);
        end++;
    }

    return max;
};
console.log("🚀 ~ 1004-max-consecutive-ones-iii.js:21 ~ longestOnes:", longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))

//Ý tưởng: dùng cửa số trượt động
//Sẽ có 2 con trỏ end và start 1 biến lưu trữ độ dài max và 1 biến lưu trữ số lượng số 0 của cửa sổ
//ví dụ khi mà count vượt quá k thì sẽ lặp start để cho count <= k(tại vì trong quá trình end lặp có thể làm cho count vượt quá thì start sẽ phải kiểm soát lại) mỗi lần vòng lặp end đều sẽ thực hiện tính lại max vì end luôn luôn được cập nhật
//sẽ lặp đến khi end >= len(nums)