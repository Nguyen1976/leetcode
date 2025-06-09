/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //prefix: tích các phần tử bên trái
    //suffix : tích các phần tử bên phải

    //Ý tưởng: answer tại i sẽ lưu trữ tích của các phần tử trái và phải của nó
    //Vòng lặp đầu là đã lưu tích các phần tử trái của nó
    //Vòng lặp 2 thì ngược lại

    const len = nums.length;
    let answer = new Array(len).fill(1);

    let prefix = 1;
    for(let i = 0; i < len; i++) {
        answer[i] *= prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for(let i = len - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;
};