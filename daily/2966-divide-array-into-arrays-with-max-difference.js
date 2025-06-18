/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b)
    //Tạo mảng 2 chiều với số hàng là nums.length/3 và cột là 3
    const result = Array(nums.length / 3).fill(null).map(() => Array(3).fill(null))
    let rowResult = 0//đại diện cho hàng hiện tại của mảng kết quả
    for(let i = 0; i < nums.length; i += 3) {//vòng lặp với bước nhảy là 3
        if(nums[i + 2] - nums[i] <= k) {//Trường hợp hợp lệ  
            result[rowResult][0] = nums[i]
            result[rowResult][1] = nums[i + 1]
            result[rowResult][2] = nums[i + 2]
            rowResult++
        } else {
            return []
        }
    }

    return result
};

/*
    Dựa vào mảng nums tạo ra các mảng 2 chiều mà các phần tử phải có hiệu nhỏ hơn k
    có thể sort nums trước
*/