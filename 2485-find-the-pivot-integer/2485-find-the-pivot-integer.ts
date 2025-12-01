function pivotInteger(n: number): number {
    let total = (n * (n + 1)) / 2

    for(let i = 0; i <= n; i++) {
        //giả sử trọn pivot = i
        let pivot = i
        let total1 = (i * (i + 1)) / 2
        let total2 = total - total1 + i

        if(total1 === total2) return pivot
    }

    return -1
};

/*
    giả sử tính tổng từ 1 đến n
    n*(n + 1)
*/