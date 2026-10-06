class MinStack {
    private minIdx: number
    private stack: number[]
    constructor() {
        this.minIdx = -1
        this.stack = []
    }

    push(value: number): void {
        if(this.stack.length === 0) {
            this.minIdx = 0
        } else {
            if(this.stack[this.minIdx] > value) this.minIdx = this.stack.length
        }
        this.stack.push(value)
    }

    pop(): void {
        if(this.stack.length - 1 === this.minIdx) {
            let min = this.stack[0], mIdx = 0
            for(let i = 1; i < this.stack.length - 1; i++) {
                if(this.stack[i] < min) {
                    min = this.stack[i]
                    mIdx = i
                }
            }
            this.minIdx = mIdx
        }
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }   

    getMin(): number {
        return this.stack[this.minIdx]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */