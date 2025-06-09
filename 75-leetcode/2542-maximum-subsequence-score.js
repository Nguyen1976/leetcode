/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = []
  }

  push(val) {
    this.heap.push(val)
    this._bubbleUp()
  }

  pop() {
    if (this.size() === 1) return this.heap.pop()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._bubbleDown()
    return top
  }

  size() {
    return this.heap.length
  }

  _bubbleUp() {//nlogn
    let i = this.heap.length - 1
    while (i > 0) {
      let p = Math.floor((i - 1) / 2)
      if (this.heap[i] >= this.heap[p]) break
      ;[this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
      i = p
    }
  }

  _bubbleDown() {//log(n)
    let i = 0,
      n = this.heap.length
    while (true) {
      let left = 2 * i + 1,
        right = 2 * i + 2,
        smallest = i
      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right
      if (smallest === i) break
      ;[this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
      i = smallest
    }
  }
}

var maxScore = function (nums1, nums2, k) {
  const n = nums1.length
  let combined = nums2.map((val, i) => [val, nums1[i]]) //tạo các cặp

  combined.sort((a, b) => b[0] - a[0]) //nlogn

  let minHeap = new MinHeap()

  let sum = 0
  let maxScore = 0

  for (let [num2, num1] of combined) {
    minHeap.push(num1)

    sum += num1

    if (minHeap.size() > k) {
      sum -= minHeap.pop() //sẽ bỏ qua thằng min trong sum hiện tại đảm bảo sum sẽ được tối ưu và chỉ có k phần tử
    }

    //Khi đủ k phần tử
    if (minHeap.size() === k) {
      maxScore = Math.max(maxScore, sum * num2) //giả định num2 là min
    }
  }

  return maxScore
}

/**
 * Tìm max:
 * tổng của k phần tử nums1 * min của k phần tử nums2
 * Điều kiện là chỉ số của 3 phần tử 2 mảng num1 và num2 phải cùng chỉ số
 * Nếu chúng ta sort num1 thì num2 phải được sort theo mảng num1
 * Ý tưởng: sort mảng num2 giảm dần và num1 cũng phải được sort theo num2
 * Nhưng như vậy nó chưa thể tối ưu sum nums1 nhất có thể
 * 
 * 
 * minHeap để tối ưu sẽ tự xây dựng vì khi push hoặc pop trong minHeap chỉ mấn logn thay vì dùng sort để giả lập minHeap mất nlogn
 */
