/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //tạo number unique
    let uniqNum = 0;

    //lặp qua nums
    for (let idx = 0; idx < nums.length; idx++) {
        //numberUniq
        uniqNum = uniqNum ^ nums[idx];
    } 
    return uniqNum;     
};

/**
Requiments
time complexity: O(n)
space complexity: O(1) 

Toán tử ^:
x = x ^ y <=> x = x XOR y

0 ^ 0 = 0
1 ^ 1 = 0
1 ^ 0 = 1
0 ^ 1 = 1

2 ^ 4 = 010 ^ 100 = 110 = 6

Ví dụ với [2, 2, 1]
vòng lặp 1:
2 ^ 0 = 010 ^ 000 = 010 = 2
2 ^ 2 = 000//Giống nhau retun 0
khi gặp phần tử khác thì là trả về giá trị phần từ đó
*/