interface TTLValue {
    value: number
    timer: ReturnType<typeof setTimeout>
}

class TimeLimitedCache {
    cache = new Map<number, TTLValue>()
    
    constructor() {
        
    }
    
    set(key: number, value: number, duration: number): boolean {
        //twucs cái khóa này chỉ có tác dụng trong thời gian duration
        //nếu khóa tồn tại thì ghi đề
        //trả về true nếu cùng 1 khóa và chưa hết hạn ngược lại là false
        const exists = this.cache.has(key)
        if(exists) clearTimeout(this.cache.get(key).timer)
        this.cache.set(key, {value, timer: setTimeout(() => this.cache.delete(key), duration)})
        return exists
    }
    
    get(key: number): number {
        //tồn tại kháo chưa hết hạn thì trả về value còn k thì -1
        return this.cache.has(key) ? this.cache.get(key).value : -1
    }
    
    count(): number {
        //trả về số lượng khóa chưa hết hạn
        return this.cache.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */