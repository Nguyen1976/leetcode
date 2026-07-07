function sumAndMultiply(n: number): number {
    let sum = 0;
    let num = 0;
    let place = 1;

    while (n > 0) {
        const digit = n % 10;

        if (digit !== 0) {
            sum += digit;
            num += digit * place;
            place *= 10;
        }

        n = Math.floor(n / 10);
    }

    return sum * num;
}