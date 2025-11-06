function processQueries(c: number, connections: number[][], queries: number[][]): number[] {
    const parent = Array.from({ length: c + 1 }, (_, i) => i);
    const size = new Array(c + 1).fill(1);
    const find = (x) => (parent[x] === x ? x : (parent[x] = find(parent[x])));
    const union = (a, b) => {
        a = find(a); b = find(b);
        if (a === b) return;
        if (size[a] < size[b]) [a, b] = [b, a];
        parent[b] = a;
        size[a] += size[b];
    };
    for (const [u, v] of connections) union(u, v);
    const members = Array(c + 1);
    for (let i = 1; i <= c; i++) {
        const r = find(i);
        if (!members[r]) members[r] = [];
        members[r].push(i);
    }
    const ptr = new Array(c + 1).fill(0);
    const offline = new Array(c + 1).fill(false);
    const ans = [];
    for (const [t, x] of queries) {
        if (t === 1) {
            if (!offline[x]) {
                ans.push(x);
            } else {
                const r = find(x);
                const arr = members[r] || [];
                let p = ptr[r] || 0;
                while (p < arr.length && offline[arr[p]]) p++;
                ptr[r] = p;
                ans.push(p < arr.length ? arr[p] : -1);
            }
        } else {
            offline[x] = true;
        }
    }
    return ans;
};