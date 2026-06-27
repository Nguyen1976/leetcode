function maximumLength(nums: number[]): number {
    const freq = new Map<number, number>();

    for (const num of nums) {
        freq.set(num, (freq.get(num) ?? 0) + 1);
    }

    let ans = 1;

    // xử lý riêng số 1
    if (freq.has(1)) {
        const cnt = freq.get(1)!;
        ans = Math.max(ans, cnt % 2 === 0 ? cnt - 1 : cnt);
    }

    for (const [start] of freq) {

        if (start === 1) continue;

        let cur = start;
        let len = 0;

        while (true) {

            const cnt = freq.get(cur) ?? 0;

            if (cnt >= 2) {
                len += 2;
            } else if (cnt === 1) {
                len += 1;
                break;
            } else {
                // không tồn tại cur
                len = Math.max(0, len - 1);
                break;
            }

            cur = cur * cur;
        }

        ans = Math.max(ans, len);
    }

    return ans;
}