function stoneGameIX(stones: number[]): boolean {
    const arr = new Array(3).fill(0);

    for (const stone of stones) {
        arr[stone % 3]++;
    }

    if (arr[0] % 2 === 0) {
        return arr[1] > 0 && arr[2] > 0;
    }

    return Math.abs(arr[1] - arr[2]) > 2;
}