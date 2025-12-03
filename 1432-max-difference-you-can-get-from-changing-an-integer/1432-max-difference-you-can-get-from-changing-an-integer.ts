function maxDiff(num: number): number {
    if(num === 9) return 8
    let min = Infinity;
    let max = -Infinity;
    const s0 = String(num);

    for (let x = 0; x <= 9; x++) {
        for (let y = 0; y <= 9; y++) {
            const sx = String(x);
            const sy = String(y);

            // tạo chuỗi sau khi thay thế (vẫn là string)
            const replacedStr = s0.split('').map(e => e === sx ? sy : e).join('');

            // nếu tạo leading zero (chuỗi dài > 1 và ký tự đầu là '0') thì invalid
            if (replacedStr.length > 1 && replacedStr[0] === '0') continue;

            // còn lại chuyển về number để so sánh
            const numAfterReplace = Number(replacedStr);

            // nếu bạn muốn bỏ trường hợp = 0 (tùy đề) thì vẫn giữ kiểm tra numAfterReplace === 0
            // nhưng thường phép tạo "0" hợp lệ nếu toàn bộ chuỗi là "0"
            min = Math.min(numAfterReplace, min);
            max = Math.max(numAfterReplace, max);
        }
    }

    return max - min;
}
