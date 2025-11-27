function countUnguarded(
    m: number,
    n: number,
    guards: number[][],
    walls: number[][],
): number {
    const EMPTY = 0, GUARD = 1, WALL = 2, GUARDED = 3;
    const matrix = new Uint8Array(m * n);
    let count = m * n - guards.length - walls.length;

    const index = (r: number, c: number) => r * n + c;

    for (const [r, c] of guards) matrix[index(r, c)] = GUARD;
    for (const [r, c] of walls) matrix[index(r, c)] = WALL;

    const process = (r: number, c: number) => {
        const check = (_r: number, _c: number): boolean => {
            const idx: number = index(_r, _c);
            if (matrix[idx] === GUARD || matrix[idx] === WALL) return true;
            if (matrix[idx] === 0) {
                matrix[idx] = GUARDED;
                count--;
            }
            return false;
        }
        for (let _r: number = r - 1; _r >= 0; _r--) if (check(_r, c)) break;
        for (let _r: number = r + 1; _r < m; _r++) if (check(_r, c)) break;
        for (let _c: number = c - 1; _c >= 0; _c--) if (check(r, _c)) break;
        for (let _c: number = c + 1; _c < n; _c++) if (check(r, _c)) break;
    };

    for (const [r, c] of guards) process(r, c);

    return count;
}