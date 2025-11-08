function myAtoi(s: string): number {
    const MIN_VALUE: number = -(2 ** 31);
    const MAX_VALUE: number = 2 ** 31 - 1;
    const res: number = parseInt(s) || 0;

    if (res < MIN_VALUE) return MIN_VALUE;
    if (res > MAX_VALUE) return MAX_VALUE;
   
    return res;
};