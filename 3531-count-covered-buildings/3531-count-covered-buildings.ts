function countCoveredBuildings(n: number, buildings: number[][]): number {
    const rowMap = new Map<number, number[]>();
    const colMap = new Map<number, number[]>();

    for (const [x, y] of buildings) {
        if (!rowMap.has(x)) rowMap.set(x, []);
        if (!colMap.has(y)) colMap.set(y, []);
        rowMap.get(x)!.push(y);
        colMap.get(y)!.push(x);
    }

    for (const arr of rowMap.values()) arr.sort((a, b) => a - b);
    for (const arr of colMap.values()) arr.sort((a, b) => a - b);

    let res = 0;

    function hasLeftRight(arr: number[], val: number): [boolean, boolean] {
        let l = 0, r = arr.length - 1;
        let idx = -1;

        while (l <= r) {
            const mid = (l + r) >> 1;
            if (arr[mid] === val) {
                idx = mid;
                break;
            } else if (arr[mid] < val) l = mid + 1;
            else r = mid - 1;
        }

        const hasLeft = idx > 0;
        const hasRight = idx < arr.length - 1;
        return [hasLeft, hasRight];
    }

    for (const [x, y] of buildings) {
        const row = rowMap.get(x)!;
        const col = colMap.get(y)!;

        const [left, right] = hasLeftRight(row, y);
        const [up, down] = hasLeftRight(col, x);

        if (left && right && up && down) res++;
    }

    return res;
}