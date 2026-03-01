function hasAlternatingBits(n: number): boolean {
    let prev = -1

    while(n > 0) {
        let currBit = n & 1
        if(currBit === prev) return false
        prev = currBit
        n >>= 1
    }
    return true
};