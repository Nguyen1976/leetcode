function removeCoveredIntervals(intervals: number[][]): number {
    const n = intervals.length
    let removed = 0

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(i !== j) {
                if (intervals[j][0] <= intervals[i][0] && intervals[i][1] <= intervals[j][1]) {
                    removed++;
                    break;
                }
            }
        }
    }

    return n - removed
};