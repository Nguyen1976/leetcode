function isGood(nums: number[]): boolean {
    const n: number = nums.length;
    const sorted_num: number[] = [...nums].sort((a, b) => a - b);
    const expected: number[] = [];
    for (let i = 1; i < n; i++) {
        expected.push(i);
    }
    expected.push(n - 1);
    return JSON.stringify(sorted_num) === JSON.stringify(expected);
};