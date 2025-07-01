/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length
  let candies = new Array(n).fill(1)

  // Left to right: ensure right child gets more candy if rated higher
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  // Right to left: ensure left child gets more candy if rated higher
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1) //chúng ta phải giữ giá trị lớn nhất để thỏa mãn 2 chiều
    }
  }

  return candies.reduce((a, b) => a + b, 0)
}

/**
Có n đứa trẻ đứng trên 1 hàng
mỗi đứa trẻ được gán giá trị xếp hạng trong ratings
 Bạn đưa keo cho những đứa trẻ này phải làm theo yêu cầu sau:
 mỗi đứa trẻ phải có ít nhất 1 candy
 đứa trẻ với rating cao hơn thì được nhiều kẹo hơn hàng xóm
 tức là với hàng xóm rating bằng nhau thì nó có thể nhận được ít kẹo hơn
 trả về số kẹo min

Ý tưởng:
ta duyệt từ trái sang phải:
Nếu ratings[i] > ratings[i - 1], thì candies[i] = candies[i - 1] + 1.

Duyệt từ phải sang trái
Nếu ratings[i] > ratings[i + 1], thì candies[i] = max(candies[i], candies[i + 1] + 1).

tổng candies lại
kỹ thuật:
two-pass greedy 

 */
