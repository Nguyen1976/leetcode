function mirrorDistance(n: number): number {
    return Math.abs(n - Number(String(n).split('').reverse().join('')))
};