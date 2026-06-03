class RandomizedCollection {
    private arr: number[]
    private map: Map<number, Set<number>>

    constructor() {
        this.arr = []
        this.map = new Map()
    }

    insert(val: number): boolean {
        const notExist = !this.map.has(val)

        if (!this.map.has(val)) {
            this.map.set(val, new Set())
        }

        this.arr.push(val)
        this.map.get(val)!.add(this.arr.length - 1)

        return notExist
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) return false

        const indexes = this.map.get(val)!
        const removeIndex = indexes.values().next().value

        const lastIndex = this.arr.length - 1
        const lastVal = this.arr[lastIndex]

        // xóa removeIndex khỏi val trước
        indexes.delete(removeIndex)

        // nếu không phải phần tử cuối thì swap
        if (removeIndex !== lastIndex) {
            this.arr[removeIndex] = lastVal

            const lastSet = this.map.get(lastVal)!

            lastSet.delete(lastIndex)
            lastSet.add(removeIndex)
        }

        this.arr.pop()

        if (indexes.size === 0) {
            this.map.delete(val)
        }

        return true
    }

    getRandom(): number {
        const rand = Math.floor(Math.random() * this.arr.length)
        return this.arr[rand]
    }
}