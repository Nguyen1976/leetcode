/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1
    let leftMax = height[left]
    let rightMax = height[right]
    let water = 0

    while(left < right) {
        if(leftMax < rightMax) {//bên trái thấp hơn bên phải
            left++
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];//Nếu có sự chênh lệch giữa left cũ và mới thì đó sẽ là số lượng nước tức là hiểu đơn giản thì nếu nó đang dốc xuống thì lượng nước có thể sẽ được cộng vì đây là trường hợp cột right nó đang lớn hơn cột left lên trường hợp trên hoàn toàn có thể được cộng thêm water
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
        }
    }

    return water
};

/**
    Ở tại mỗi điểm sẽ lặp đến điểm có chiều cao lớn hơn hoặc bằng nó
    sử dụng two pointer
 */