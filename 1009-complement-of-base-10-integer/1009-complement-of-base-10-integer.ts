function bitwiseComplement(n: number): number {
    let s = n.toString(2)
    return parseInt(s.split('').map(i => i === '1' ? '0' : '1').join(''), 2)
};