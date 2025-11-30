class LRUCache {
    capacity: number
    cache: Map<number, number>
    list: number[]
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map<number, number>();
        this.list = []
    }

    get(key: number): number {
        for(let i = 0; i < this.capacity; i++) {
            if(this.list[i] === key) {
                if(i !== 0) {
                    this.list.splice(i, 1); 
                    this.list.unshift(key);  
                }

                return this.cache.get(key)
            } 
        }

        return -1
    }

      put(key: number, value: number): void {

        const idx = this.list.indexOf(key);

        if (idx !== -1) {
            this.list.splice(idx, 1);
            this.list.unshift(key);
        } else {

            if (this.list.length === this.capacity) {
                const lru = this.list.pop()!;
                this.cache.delete(lru);
            }

            this.list.unshift(key);
        }

        this.cache.set(key, value);
    }
}

/**
LRU chỉ chứa tối đa capacity phần tử
khi put thì luôn thêm vào đầu và khi 1 thằng được dùng thì nó cũng dược đưa lên đầu
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */