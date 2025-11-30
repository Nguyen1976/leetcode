class Mheap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val: number) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return top;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        const val = this.heap[idx];
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= val) break;
            this.heap[idx] = this.heap[parent];
            idx = parent;
        }
        this.heap[idx] = val;
    }

    bubbleDown() {
        let idx = 0;
        const len = this.heap.length;
        const val = this.heap[0];
        while (true) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let swap = -1;

            if (left < len && this.heap[left] < val) swap = left;
            if (right < len && this.heap[right] < (swap === -1 ? val : this.heap[left])) swap = right;

            if (swap === -1) break;

            this.heap[idx] = this.heap[swap];
            idx = swap;
        }
        this.heap[idx] = val;
    }
}

class KthLargest {
    k: number;
    heap: Mheap;

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = new Mheap();
        for (const n of nums) this.add(n);
    }

    add(val: number): number {
        if (this.heap.size() < this.k) {
            this.heap.push(val);
        } else if (val > this.heap.peek()) {
            this.heap.pop();
            this.heap.push(val);
        }
        return this.heap.peek();
    }
}
