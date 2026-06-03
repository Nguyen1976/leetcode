class SummaryRanges {
    private arr: number[]

    constructor() {
        this.arr = []
    }

    addNum(value: number): void {
        let left = 0
        let right = this.arr.length

        // binary search tìm vị trí insert
        while (left < right) {
            const mid = Math.floor((left + right) / 2)

            if (this.arr[mid] < value) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (this.arr[left] === value) return

        this.arr.splice(left, 0, value)
    }

    getIntervals(): number[][] {
        if (this.arr.length === 0) return []

        const result: number[][] = []

        let start = this.arr[0]
        let end = this.arr[0]

        for (let i = 1; i < this.arr.length; i++) {
            const num = this.arr[i]

            // liên tiếp
            if (num === end + 1) {
                end = num
            } else {
                result.push([start, end])

                start = num
                end = num
            }
        }

        result.push([start, end])

        return result
    }
}
/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */