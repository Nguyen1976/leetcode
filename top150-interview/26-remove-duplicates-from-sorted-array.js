/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0
    let left = 1

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[left - 1]) {
            nums[left] = nums[i]
            left++
        }
    }

    return left
};

/**
Y tuong:
vi mang da duoc sap xep dung con tro ghi nho vi tri dau va tim phan tu tiep theo khac phan tu vi tri dau va thay the no vao vi tri dau do va tiep tuc(vi tri dau duoc hieu la left)

 */