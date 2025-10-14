function climbStairs(n: number): number {
    const dp: number[] = Array(n).fill(-1)

    dp[0] = 1//kết quả cho n = 1  
    dp[1] = 2//kết quả cho n = 2


    for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    } 

    return dp[n - 1]
};

/*
    Xác định trạng thái đặt dp[i] là kết quả của i và dp[n - 1] là kết quả cho n 
    Quan hệ chuyển trạng thái
    Từ đâu tôi có thể đến được cái trạng thái này
    có thể nhận thấy khi biết n = 1 và n = 2 thì tính dược n = 3 bằng việc cộng kết quả 2 lần leo trước
    => dp[i] = dp[i - 1] + dp[i - 2]

    điều kiện bắt đầu từ dp[0] sẽ là kết quả cho n = 1

    hướng triển khai theo bottom up tức từ nhỏ đến lớn
*/



/**.
    Hướng giải bài thứ 2 là top down tức từ trên xuống giải bằng đệ quy

 */

//  function climbStairs(n: number): number {
//     if(n <= 1) return 1

//     return climbStairs(n - 1) + climbStairs(n - 2)
// };