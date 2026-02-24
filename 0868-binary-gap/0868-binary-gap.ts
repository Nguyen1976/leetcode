function binaryGap(n: number): number {
    let result = 0
    let prev = -1
    let position = 0

    while(n > 0) {
        if(n & 1) {
            if(prev !== -1) {
                result = Math.max(position - prev, result)
            }
            prev = position
        }
        n >>= 1
        position++
    }

    return result
};
