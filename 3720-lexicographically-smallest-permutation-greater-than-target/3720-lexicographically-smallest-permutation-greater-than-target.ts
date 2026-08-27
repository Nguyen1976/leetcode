function lexGreaterPermutation(s: string, target: string): string {
    const map = new Map<string, number>();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let res = "";

    function backtrack(index: number, greater: boolean): boolean {
        if (index === s.length) {
            return greater;
        }

        const start = greater
            ? 'a'.charCodeAt(0)
            : target[index].charCodeAt(0);

        for (
            let j = start;
            j <= 'z'.charCodeAt(0);
            j++
        ) {
            const char = String.fromCharCode(j);

            // Không còn chữ này
            if ((map.get(char) || 0) === 0) {
                continue;
            }

            res += char;
            map.set(char, (map.get(char) || 0) - 1);

            const newGreater =
                greater || char > target[index];

            if (backtrack(index + 1, newGreater)) {
                return true;
            }

            // Không đi được => BACKTRACK
            res = res.slice(0, -1);
            map.set(char, (map.get(char) || 0) + 1);
        }

        return false;
    }

    return backtrack(0, false) ? res : "";
}