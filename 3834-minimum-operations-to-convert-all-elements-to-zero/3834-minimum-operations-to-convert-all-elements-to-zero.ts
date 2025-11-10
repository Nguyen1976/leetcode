function minOperations(nums: number[]): number {
    const s = []
    let res = 0
    for(const a of nums) {
        while(s.length && s[s.length - 1] > a) {
            s.pop()
        }
        if (a === 0) continue;
        if(!s.length || s[s.length - 1] < a) {
            res++;
            s.push(a);
        }
    }

    return res
};

/**
Khi tăng giá trị nhỏ lên giá trị lớn bạn cần thêm 1 phép mới để gọt tầng đó đi
Khi giảm về 0 thì đang trở lại mức xử lý trước đó => không cần thêm phép mới
stack dùng để theo giỏi gia strij mới cao hơn mức cũ => tăng res
 */