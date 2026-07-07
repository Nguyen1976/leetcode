function sumAndMultiply(n: number): number {
    let sum = 0
    let digit = ''
    for(let c of String(n)) {
        if(c !== '0') {
            digit += c
            sum += Number(c)
        }
    }

    return Number(digit) * sum
};