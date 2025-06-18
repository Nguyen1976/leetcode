/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let near = 0, far = 0, jumps = 0;
    
    while(far < nums.length - 1) {//Điều kiện lặp là nơi xa nhất phải nhỏ hơn điểm cuối
        let farthest = 0
        for(let i = near; i <= far; i++) {//Như chiến lược chúng ta sẽ kiểm tra giữa khoảng near và far
            farthest = Math.max(farthest, i + nums[i]);//tìm vị trí xa nhất có thể đến
        }
        near = far + 1 //sau khi kiểm tra giữa near và far để lấy ra vị trí xa nhất thì sẽ cập nhật near là khoảng mới
        far = farthest
        jumps++;
    }
    //Tức là vòng lặp trên ví dụ ở vị trí index là 0 sẽ xem có thể nhảy được đến đâu và kiểm tra những cái khoảng trong đó chỗ nào có thể nhảy được xa nhất ở bước tiếp theo
    //Ví dụ ban đầu vị trí 0 nums[0] = 2
    //Thì sẽ kiểm tra nhưng nói đáp đến và từ nơi đáp đến có thể đi xa nhất là đến đâu mỗi lần kiểm tra để lấy ra fathest thì sẽ tình là 1 jump vì chúng ta chỉ nhảy đến nơi tối ưu nhất thôi
    return jumps;
};

/*
Giải thích đề bài muốn trả về số bước nhảy ít nhất để có thể đến được vị trí cuối
Có thể nhảy nums[i] hoặc nhảy ít hơn nums[i]
Ý tưởng:
Chiển lược là để có near và far và kiểm tra giữa 2 thằng thì có thể đến dược vị trí xa nhất không
*/