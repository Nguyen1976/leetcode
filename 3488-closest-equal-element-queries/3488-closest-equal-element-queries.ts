function solveQueries(nums: number[], queries: number[]): number[] {
    const n = nums.length;
    const map = new Map<number, number[]>();

    // 1. Preprocessing: O(N)
    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i])!.push(i);
    }

    const results: number[] = [];

    // 2. Query Processing: O(Q * log(N))
    for (let i = 0; i < queries.length; i++) {
        const qIdx = queries[i];
        const val = nums[qIdx];
        const positions = map.get(val)!;

        if (positions.length === 1) {
            results.push(-1);
            continue;
        }

        let left = 0;
        let right = positions.length - 1;
        let k = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (positions[mid] === qIdx) {
                k = mid;
                break;
            }
            if (positions[mid] < qIdx) left = mid + 1;
            else right = mid - 1;
        }

        const prevIdx = positions[(k - 1 + positions.length) % positions.length];
        const nextIdx = positions[(k + 1) % positions.length];

        const getDist = (i: number, j: number) => {
            const d = Math.abs(i - j);
            return Math.min(d, n - d);
        };

        results.push(Math.min(getDist(qIdx, prevIdx), getDist(qIdx, nextIdx)));
    }

    return results;
}