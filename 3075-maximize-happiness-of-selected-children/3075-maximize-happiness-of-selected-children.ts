function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a)
    let res = 0
    for(let i = 0; i < k; i++) {
        res += happiness[i] - i <= 0 ? 0 : happiness[i] - i
    }

    return res
};

/**
Bạn được cho 1 mảng happiness và số nguyên dương k
Có n học sinh đứng trong hàng đợi, tại đứa thứ i có chỉ số hạnh phúc là happiness[i]
Bạn muốn chọn ra k đứa từ n đức trong k lượt

trong mỗi lượt bạn chọn 1 đứa, giá trị hạnh phúc của tất cả không dược chọn đều giảm đi 1, Lưu ý rằng
giá trị hạnh phúc không thể trở lên âm và chỉ giảm nếu nó dương

Trả về tổng giá trị hạnh phúc tối đa của những đứa trẻ được chọn mà bạn có thể đạt được bằng cách chọn k đứa trẻ
 */