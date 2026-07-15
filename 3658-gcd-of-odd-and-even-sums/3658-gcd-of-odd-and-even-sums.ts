function gcdOfOddEvenSums(n: number): number {
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 1; i <= n; i++) {
        sumOdd += 2 * i - 1; // 1, 3, 5, 7...
        sumEven += 2 * i;    // 2, 4, 6, 8...
    }

    function euclidGCD(num1: number, num2: number): number {
        if (num2 === 0) {
            return num1;
        }

        return euclidGCD(num2, num1 % num2);
    }

    return euclidGCD(sumOdd, sumEven);
}