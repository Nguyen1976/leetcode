function minPartitions(n: string): number {
    return Math.max(...n.split('').map(e => Number(e)))
};

/**
tức phải tìm tổng các só dec bi sao cho tổng bằng n
có thể lấy ví dụ
1 số có n chữ số 
có thể xem n chữ số 1 hoặc 1 và n-1 chữ số 0

ví dụ ta có 8 2 7 3 1
=> ta phải có 8 số 1 tức cần 8 số

suy nghĩ kĩ 1 chút thì ta chỉ cần tìm số lớn nhất có trong dãy n và đó là đáp án 
 */