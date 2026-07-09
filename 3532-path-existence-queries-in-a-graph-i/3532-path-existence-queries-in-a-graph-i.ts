function pathExistenceQueries(
    n: number,
    nums: number[],
    maxDiff: number,
    queries: number[][]
): boolean[] {

    const component = new Array<number>(n);

    let id = 0;
    component[0] = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            id++;
        }

        component[i] = id;
    }

    return queries.map(
        ([u, v]) => component[u] === component[v]
    );
}