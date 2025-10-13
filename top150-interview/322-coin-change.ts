function coinChange(coins: number[], amount: number): number {
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0

    for(let i = 1; i <= amount; i++) {
        for(let coin of coins) {
            if(coin <= i) {//Tức loại tiền nó phải nhỏ hơn số tiền cần đạt dược 
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
                //dp[i - coin] tức là số cách để đạt dược i - coin vì hiện tại sẽ được cộng thêm coin rồi lên cần tìm số lần cộng để bù khoảng còn thiếu và + 1 vì hiện tại đã được mặc định là cộng coin rồi
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
};

/*
    Ý tưởng
    xây dựng mảng dp với dp[i] là số luownjgn xu ít nhất để tạo thành số tiền i
    Khởi tạo dp[0] = 0 vì không cần tiền đẻ tạo tạo lên số tiền 0 và các giá trị khác là vô cùng vì đang tìm số lượng ít nhất
    Lặp qua từng số tiền 1 đến amount
    với mỗi số tiền i duyệt qua từng loại đồng xu coin
    nếu coin <= 1
    dp[i] = min(dp[i], dp[i - coin] + 1)

    Kiểm tra kết quả nếu dp[amount] vẫn là vô cùng thì return về -1 
*/