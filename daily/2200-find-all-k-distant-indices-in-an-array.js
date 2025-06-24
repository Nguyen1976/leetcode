/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let result = []
    let r = 0
    let n = nums.length
    for(let j = 0; j < n; j++) {
        if(nums[j] == key) {
            const l = Math.max(r, j - k)//Giới hạn khoảng bên trái và cũng phải làm vậy phòng trường hợp j - k nằm ngoài mảng
            r = Math.min(n - 1, j + k) + 1; //tức là j + k có thể vượt ra ngoài mảng nếu như nó vượt ra ngoài thì n - 1 là hợp lệ nhất thì có thể giới hạn khoảng bên phải là n
            for (let i = l; i < r; ++i) {
                result.push(i);
            }
        }
    }

    return result
};

/**
Tìm i thỏa mãn |i - j| <= k and nums[j] == key 
Ta sẽ tìm j trước và mỗi lần tìm thầy j sẽ thực hiện tính toán
khi tìm thấy j thì chắc chắc j cũng là 1 trong số i cần tìm vì k >= 1
Ví dụ key = 2 và k = 2 và tìm thấy j = 3 thì các số i thỏa mãn sẽ là (k + j; j) và (j; j + k)
Vì k có thể bằng nums.length ví dụ j đang nằm cuối r thì nó sẽ k thể cộng thêm k và mảng result sẽ là nhuwnnxg số nằm trong khoảng từ 0 -> length - 1

*/