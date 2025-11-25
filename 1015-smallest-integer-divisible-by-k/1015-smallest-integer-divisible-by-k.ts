function smallestRepunitDivByK(k: number): number {
    if(k % 2 === 0 || k % 5 === 0) return -1
    let rem = 0
    for (let len = 1; len <= k; len++) {
        rem = (rem * 10 + 1) % k
        if (rem === 0) return len
    }
    return -1
};

/**
Cho một số nguyên dương k, bạn cần tìm độ dài của số nguyên dương nhỏ nhất n sao cho n chia hết cho k và n chỉ chứa chữ số 1.

Trả về độ dài của n. Nếu không có n như vậy, trả về -1.

Lưu ý: n có thể không vừa với số nguyên có dấu 64 bit

nếu n chỉ chứa chữ số 1 thì chỉ cần thử từ 1 ->1111111n

giả sử những số là 2 hay 5 thì không thể

100000
 */