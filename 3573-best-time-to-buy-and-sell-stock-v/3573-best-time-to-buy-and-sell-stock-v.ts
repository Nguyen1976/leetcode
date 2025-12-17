function maximumProfit(prices: number[], k: number): number {
    const n = prices.length;
    if (n === 0 || k === 0) return 0;

    const NEG_INF = Number.NEGATIVE_INFINITY;

    // prev[t][s], curr[t][s]
    // s: 0 = neutral, 1 = long, 2 = short
    let prev = Array.from({ length: k + 1 }, () => [NEG_INF, NEG_INF, NEG_INF]);
    let curr = Array.from({ length: k + 1 }, () => [NEG_INF, NEG_INF, NEG_INF]);

    // Day 0 initialization
    prev[0][0] = 0;
    prev[0][1] = -prices[0]; // open long
    prev[0][2] = prices[0];  // open short

    for (let i = 1; i < n; i++) {
        for (let t = 0; t <= k; t++) {
            // Reset current
            curr[t][0] = curr[t][1] = curr[t][2] = NEG_INF;

            // 1. Neutral
            // stay neutral
            curr[t][0] = Math.max(curr[t][0], prev[t][0]);

            // close long
            if (t > 0 && prev[t - 1][1] !== NEG_INF) {
                curr[t][0] = Math.max(
                    curr[t][0],
                    prev[t - 1][1] + prices[i]
                );
            }

            // close short
            if (t > 0 && prev[t - 1][2] !== NEG_INF) {
                curr[t][0] = Math.max(
                    curr[t][0],
                    prev[t - 1][2] - prices[i]
                );
            }

            // 2. Long
            // keep holding long
            if (prev[t][1] !== NEG_INF) {
                curr[t][1] = Math.max(curr[t][1], prev[t][1]);
            }

            // open long
            if (prev[t][0] !== NEG_INF) {
                curr[t][1] = Math.max(
                    curr[t][1],
                    prev[t][0] - prices[i]
                );
            }

            // 3. Short
            // keep holding short
            if (prev[t][2] !== NEG_INF) {
                curr[t][2] = Math.max(curr[t][2], prev[t][2]);
            }

            // open short
            if (prev[t][0] !== NEG_INF) {
                curr[t][2] = Math.max(
                    curr[t][2],
                    prev[t][0] + prices[i]
                );
            }
        }

        // swap prev and curr
        [prev, curr] = [curr, prev];
    }

    // Result must end in neutral
    let ans = 0;
    for (let t = 0; t <= k; t++) {
        ans = Math.max(ans, prev[t][0]);
    }

    return ans;
}
