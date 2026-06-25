class Fenwick {
    tree: number[];

    constructor(n: number) {
        this.tree = new Array(n + 1).fill(0);
    }

    update(i: number, delta: number): void {
        while (i < this.tree.length) {
            this.tree[i] += delta;
            i += i & -i;
        }
    }

    query(i: number): number {
        let res = 0;
        while (i > 0) {
            res += this.tree[i];
            i -= i & -i;
        }
        return res;
    }
}

function countMajoritySubarrays(nums: number[], target: number): number {
    const n = nums.length;

    const pref: number[] = [0];

    let cur = 0;
    for (const x of nums) {
        cur += (x === target ? 1 : -1);
        pref.push(cur);
    }

    const vals = [...new Set(pref)].sort((a, b) => a - b);

    const rank = new Map<number, number>();
    vals.forEach((v, i) => rank.set(v, i + 1));

    const bit = new Fenwick(vals.length);

    let ans = 0;

    for (const p of pref) {
        const idx = rank.get(p)!;

        // count previous prefix sums < p
        ans += bit.query(idx - 1);

        bit.update(idx, 1);
    }

    return ans;
}