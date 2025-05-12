/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1

    while(left < right) {
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] > nums[mid + 1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left;// or right
};

/**
 * Bài toán yêu cầu tìm phần tử mà phần tử lớn hơn 2 phần tử lân cận nó
 * Y/c: O(logn)
 */