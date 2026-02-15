function champagneTower(poured: number, query_row: number, query_glass: number): number {
    const dp: number[][] = Array.from({length: query_row + 1}, (_, r) => new Array(r + 1).fill(0))
    dp[0][0] = poured

    for (let r = 0; r < query_row; r++) {
    for (let c = 0; c <= r; c++) {
      const overflow = Math.max(0, dp[r][c] - 1)
      if (overflow > 0) {
        dp[r + 1][c] += overflow / 2
        dp[r + 1][c + 1] += overflow / 2
      }
    }
  }

  return Math.min(1, dp[query_row][query_glass])
};
//tức nó hỏi lượng champangin trong ly tại hàng row và ly số query
//có thể nghĩ sang hướng dynamic programing vì những ly sau sẽ phụ thuộc vào những ly trước
// dp[r][c] 
//ví dụ poured = 100
//dp[0][0] = 100
//dp[1][0] và dp[1][1] sẽ nhận được dp[0][0] / 2


//thiết lập công thức
/**
mình sẽ có 1 dp[r][c]
và 1 vòng for sẽ chạy row chạy đến hết query_row
và trong mỗi vòng for sẽ có 1 vòng nữa để chạy đến từng glass
ví dụ với r = 0 thì lượng nhận được sẽ là poured 
ví dụ poured tại query >= 1 thì trả về 1 
mặc định các phần tử trong mảng là 0
ví dụ tại row = 1
thì sẽ lấy ra giá trị row trước trong vòng lặp
và nó nhận vào 1 nửa của row trước tại c và c - 1
dp[r][c] = dp[r - 1][c] / 2 + dp[r - 1][c - 1] / 2
chuẩn hóa lại ví dụ cốc đầu tiên là nhận vào 100 thì lượng thặng dư là 99 mình sẽ chủ động - 1
và dp hiện tại sau khi nhận được thì cũng phải chủ động trừ đi 1

ví dụ phần nhận dược nhỏ hơn 1 mà trừ đi 1 thì sẽ là số âm lúc return về chỉ cần +1 là được


tiếp tục tư duy theo hướng là dp sẽ là nơi nhận champa

và lặp từ row hiện tại và tính của hàng tiếp theo
tức col hiện tại sẽ overflow cho 2 cốc ở dưới là c và c + 1
mình k cần phải kiểm tra c đó có tồn tại hay k
 */