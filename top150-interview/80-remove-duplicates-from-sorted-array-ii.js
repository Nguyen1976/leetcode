/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length

    let k = 2//cũng có thể là k lưu trữ cái vị trí có thể bị duplicate và nó cũng đại diện cho mảng mới ngay trong mảng cũ
    for(let j = 2; j < nums.length; j++) {
        if(nums[j] !== nums[k - 2]) {//trường hợp hợp lệ 
            nums[k] = nums[j]//ghi các số hợp lệ bắt đầu từ k
            k++
        }
    }
    return k
};
//Bài toán yêu cầu mỗi phần tử chỉ được xuất hiện tối đa 2 lần
/**
dũng kĩ thuật 2 con trỏ j để suyệt mảng và k để lưu chữ và đưa các vị trí hợp lệ vào k */