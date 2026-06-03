class RandomizedSet {
    private set: Set<number>
    constructor() {
        this.set = new Set<number>()
    }

    insert(val: number): boolean {
        const n = this.set.size
        this.set.add(val)

        return this.set.size !== n
    }

    remove(val: number): boolean {
        const n = this.set.size
        this.set.delete(val)
        return this.set.size !== n
    }

    getRandom(): number {
        return[...this.set][Math.floor(Math.random() * this.set.size)]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */