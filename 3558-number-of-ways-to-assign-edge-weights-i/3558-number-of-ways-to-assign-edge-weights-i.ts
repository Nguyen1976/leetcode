function assignEdgeWeights(edges: number[][]): number {
    //tính được depth
    const MOD = 1000000007n
    const n = edges.length + 1;

    const graph: number[][] = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const dfs = (node: number, prev: number): number => {
        let dist = 0
        for(const c of graph[node]) {
            if(c !== prev) {
                dist = Math.max(dist, dfs(c, node) + 1)
            }
        }

        return dist
    }

    const d = dfs(1, 0)
    if (d === 0) return 0;

    let base = 2n;
    let exp = BigInt(d - 1);
    let result = 1n;

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % MOD;
        }
        base = (base * base) % MOD;
        exp = exp / 2n;
    }

    return Number(result);
};