class LRUCache {
  private capacity: number
  private cache: Map<number, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key: number): number {
    //xóa key cũ và thêm nó vào lại
    if (!this.cache.has(key)) return -1
    let value: number = this.cache.get(key)!
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      //nếu có key trước đó thì bỏ đi
      this.cache.delete(key)
    }
    if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value // Lấy phần tử đầu vì map có thứ tự và phần tử đầu là ít được dùng gần đây nhất
      this.cache.delete(oldestKey)
    }
    this.cache.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//Nguyên tắc LRU sẽ xóa đi key ít được sử dụng gần đây nhất
