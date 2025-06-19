/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let numberOfSubSequence = 0
    let i = 0
    while(i < nums.length) {
        let start = nums[i]
        numberOfSubSequence++//Mặc định khi đứng ở 1 phần tử thì nó đã là 1 subsequence hợp lệ
        i++
        while(i < nums.length && nums[i] - start <= k) {//sẽ tiếp tục lặp nếu như hiệu ở i tiếp theo hợp lệ tức là ta đang đưa i đến nơi mà năm ngoài khoảng mảng subsequence để đi đến vòng lặp tiếp theo
            i++
        }
    }
    

    return numberOfSubSequence
};

/*
    Tức là ta sẽ phải phân vùng mảng để sao cho hiệu của max và min của mảng con <= k
    Thinking...
    Ví dụ ta có thể tìm 2 số có hiệu là k và nhét tất cả những số khác mà nằm trong khoảng đó vào trong mnarg đó thì sẽ hợp lệ
    Ta cũng có thể sort mảng và dễ dàng hơn trong việc tìm khoảng
*/