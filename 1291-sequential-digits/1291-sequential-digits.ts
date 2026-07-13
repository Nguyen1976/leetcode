function sequentialDigits(low: number, high: number): number[] {
    const digits = "123456789";
    const result: number[] = [];

    const minLen = String(low).length;
    const maxLen = String(high).length;

    for (let len = minLen; len <= maxLen; len++) {
        for (let start = 0; start + len <= 9; start++) {
            const num = Number(digits.slice(start, start + len));

            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }

    return result;
};

