class ArrayWrapper {
    private nums: number[]
    constructor(nums: number[]) {
        this.nums = nums
    }
    
    valueOf(): number {
        let total = 0
        for(let n of this.nums) {
            total += n
        }
        return total
    }
    
    toString(): string {
        return JSON.stringify(this.nums)
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */