function numberOfSubstrings(s: string): number {
    const n = s.length;
    const pre: number[] = new Array(n + 1);
    pre[0] = -1;
    for (let i = 0; i < n; i++) {
        if (i === 0 || (i > 0 && s[i - 1] === "0")) {
            pre[i + 1] = i;
        } else {
            pre[i + 1] = pre[i];
        }
    }
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let cnt0 = s[i - 1] === "0" ? 1 : 0;
        let j = i;
        while (j > 0 && cnt0 * cnt0 <= n) {
            const cnt1 = i - pre[j] - cnt0;
            if (cnt0 * cnt0 <= cnt1) {
                res += Math.min(j - pre[j], cnt1 - cnt0 * cnt0 + 1);
            }
            j = pre[j];
            cnt0++;
        }
    }
    return res;
};

/*
Đếm số 1 sẽ cho ra 1 phần kết quả
Đưa ra sub string với số lượng số 1 >= số lượng số 0^2

ta có thể thấy số lượng số 0 là bình phương tức nó sẽ tăng rất nhanh 
vậy lên số lượng số 0 sẽ là những số nhỏ 1,2,3,4 
giả sử n = 4 mà n toàn zero tức zero^2 = 16 và đây là trường hợp xấu nhất
vậy lên chúng ta chỉ cần xét số lượng số 0 <= sqrt(n) tức <= 2 vậy xấu nhất thì số lượng số 0^2 thì là 4


ta gọi pos[k][i] là vị trí số 0 thứ i trong chuỗi

*/