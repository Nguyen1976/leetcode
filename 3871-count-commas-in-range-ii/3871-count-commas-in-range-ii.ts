function countCommas(n: number): number {
    let res = 0;
    let base = 1000;
    
    while (base <= n) {
        // Cộng số lượng các số lớn hơn hoặc bằng base hiện tại
        res += (n - base + 1);
        base *= 1000;
    }
    
    return res;
}