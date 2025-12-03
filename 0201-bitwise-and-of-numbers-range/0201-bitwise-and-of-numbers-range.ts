function rangeBitwiseAnd(left: number, right: number): number {
    let shift = 0

    // dịch cho đến khi left == right
    while (left < right) {
        left >>= 1
        right >>= 1
        shift++
    }

    return left << shift
}
