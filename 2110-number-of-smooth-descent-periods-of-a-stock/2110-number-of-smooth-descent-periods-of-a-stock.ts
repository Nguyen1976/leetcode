function getDescentPeriods(prices: number[]): number {
    let res = prices.length

    for(let i = 0; i < prices.length; i++) {
        let j = i + 1;
        while (j < prices.length && prices[j - 1] - prices[j] === 1) {
            j++
        }
        res += (j - i) * (j - i - 1) / 2

        i = j - 1
    }

    return res
};

/**
Bạn được cho 1 mảng prices đại diện cho lịch sử giảm giá cổ phirus, prices[i] là giá được giảm vào ngày i
Khonarg thời gian giảm giá suôn sẻ bao gồm một hoặc nhiều ngày liền kề sao cho giá mỗi ngày thấp hơn giá của ngày hôm trước đúng 1. Ngày đầu tiên của khoảng thời gian được miễn quy tắc này.

//first: là độ dài của mảng
sau đó tìm các mảng con có sự giảm giá mượt mà 
giả sử mảng 2 phần từ sẽ có 1
mảng 3 phần từ có 3
mảng [4, 3, 2, 1]
với mảng này ta có công thức n*(n+1) / 2 - n vì k tính mảng 1 phẩn tử n*(n-1) / 2
ý tưởng dùng two pointer
 */