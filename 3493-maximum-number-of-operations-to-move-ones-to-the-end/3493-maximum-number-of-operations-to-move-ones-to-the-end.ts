function maxOperations(s: string): number {
    let ones = 0, res = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '1') {
            ones++
        } else if(i > 0 && s[i - 1] === '1') {
            res += ones
        }
    }

    return res
};

//tức chọn số 1 và đưa nó đến tận cùng bên phải truoccs cái số 1 khác
//với cách này việc dịch số lượng số 1 về bên phía số 0 sẽ mất operations bằng chính số lượng số 1 cần dịch