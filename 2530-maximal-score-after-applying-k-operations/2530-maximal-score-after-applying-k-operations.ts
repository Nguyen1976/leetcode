class MyMaxPriorityQueue<T> {
    private heap: { value: T; priority: number }[] = [];

    peek(): T | null {
        if (this.heap.length === 0) return null;
        return this.heap[0].value;
    }

    push(value: T, priority: number): void {
        this.heap.push({ value, priority });
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): T | null {
        if (this.heap.length === 0) return null;

        this.swap(0, this.heap.length - 1);
        const removed = this.heap.pop()!;
        this.bubbleDown(0);

        return removed.value;
    }

    private bubbleUp(index: number) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            // 🔴 khác Min Heap ở đây
            if (this.heap[parent].priority >= this.heap[index].priority) break;

            this.swap(parent, index);
            index = parent;
        }
    }

    private bubbleDown(index: number) {
        const length = this.heap.length;

        while (true) {
            let largest = index;
            const left = index * 2 + 1;
            const right = index * 2 + 2;

            if (
                left < length &&
                this.heap[left].priority > this.heap[largest].priority
            ) {
                largest = left;
            }

            if (
                right < length &&
                this.heap[right].priority > this.heap[largest].priority
            ) {
                largest = right;
            }

            if (largest === index) break;

            this.swap(index, largest);
            index = largest;
        }
    }

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size(): number {
        return this.heap.length;
    }
}




function maxKelements(nums: number[], k: number): number {
    //priotity queue
    const queue = new MyMaxPriorityQueue<number>()

    for(let i = 0; i < nums.length; i++) {
        queue.push(nums[i], nums[i])
    }

    let res = 0
    for(let i = 0; i < k; i++) {
        let curr = queue.pop()
        res += curr
        queue.push(Math.ceil(curr / 3), Math.ceil(curr / 3))
    }

    return res
};
/**
cho mảng nums và số k bạn hãy bắt đầu điểm với 0
chọn idx i, 0 <= i < nums.length

tăng score của bạn bằng nums[i]
và thay thế nums[i] = ceil(nums[i] / 3)
trả về số điểm tối đa sau k thao tác


 */