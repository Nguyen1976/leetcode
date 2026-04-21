class DSU {
    private parent:number[]
    constructor(n: number) {
        this.parent = Array.from({length: n}, (_, i) => i)
    }

    find(x) {
       if(this.parent[x] !== x) {
        this.parent[x] = this.find(this.parent[x])
       }
       return this.parent[x]
    }

    union(a, b) {
        const pa = this.find(a)
        const pb = this.find(b)
        if(pa !== pb) this.parent[pb] = pa
    }
}

function minimumHammingDistance(source: number[], target: number[], allowedSwaps: number[][]): number {
    const n = source.length
    const dsu = new DSU(n)

    for(let [a, b] of allowedSwaps) {
        dsu.union(a, b)
    }

    const groups = new Map()
    for(let i = 0; i < n; i++) {
        const root = dsu.find(i)
        groups.has(root) ? groups.get(root).push(i) : groups.set(root, [i])
    }

    let match = 0
    for(let [key, value] of groups) {
        //tính tần xuất xem có trùng nhau không
        const freq = new Map()

        //freq of source
        for(let idx of value) {
            freq.set(source[idx], freq.has(source[idx]) ? freq.get(source[idx]) + 1 : 1)
        }

        //check match with target
        for(let idx of value) {
            const val = target[idx]

            if(freq.has(val) && freq.get(val) >= 1) {
                match++
                freq.set(val, freq.get(val) - 1)
            }
        }
    }

    return n - match
    
};