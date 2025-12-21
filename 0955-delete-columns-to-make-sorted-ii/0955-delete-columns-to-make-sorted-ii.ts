function minDeletionSize(strs: string[]): number {
    const n = strs.length;
    const m = strs[0].length;

    // sorted[i] = true nếu cặp (i, i+1) đã chắc chắn đúng thứ tự
    const sorted: boolean[] = Array(n - 1).fill(false);

    let res = 0;

    // duyệt từng cột từ trái sang phải
    for (let col = 0; col < m; col++) {
        let needDelete = false;

        // kiểm tra xem cột này có phá thứ tự không
        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][col] > strs[i + 1][col]) {
                needDelete = true;
                break;
            }
        }

        // nếu phá thứ tự → xóa cột
        if (needDelete) {
            res++;
            continue;
        }

        // nếu không phá → cập nhật các cặp đã được xác định thứ tự
        for (let i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][col] < strs[i + 1][col]) {
                sorted[i] = true;
            }
        }
    }

    return res;
};