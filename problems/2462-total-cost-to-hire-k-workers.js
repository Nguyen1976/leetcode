/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */

//không được vì sort tốn O(nlog(n))
// class MinHeap {
//   constructor() {
//     this.heap = []
//   }

//   push(val) {
//     this.heap.push(val)
//     this.heap.sort((a, b) => a[0] - b[0] || a[1] - b[1]) //sort cost sau đó theo index
//   }

//   pop() {
//     return this.heap.shift()
//   }

//   size() {
//     return this.heap.length
//   }
// }

class MinHeap {
  constructor() {
    this.heap = []
  }

  // Thêm phần tử vào heap
  push(val) {
    this.heap.push(val)
    this._siftUp(this.heap.length - 1)
  }

  // Loại bỏ phần tử nhỏ nhất (ở đầu heap)
  pop() {
    if (this.heap.length <= 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this._siftDown(0)
    return min
  }

  // Lấy phần tử nhỏ nhất (ở đầu heap) mà không loại bỏ
  peek() {
    return this.heap[0]
  }

  // Kiểm tra kích thước của heap
  size() {
    return this.heap.length
  }

  // Sắp xếp lại heap khi thêm phần tử (sift-up)
  _siftUp(index) {
    let parentIndex = Math.floor((index - 1) / 2)
    while (
      index > 0 &&
      this._compare(this.heap[index], this.heap[parentIndex]) < 0
    ) {
      this._swap(index, parentIndex)
      index = parentIndex
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  // Sắp xếp lại heap khi loại bỏ phần tử (sift-down)
  _siftDown(index) {
    const length = this.heap.length
    const element = this.heap[index]
    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let swap = null

      if (
        leftChildIndex < length &&
        this._compare(this.heap[leftChildIndex], element) < 0
      ) {
        swap = leftChildIndex
      }
      if (
        rightChildIndex < length &&
        this._compare(this.heap[rightChildIndex], this.heap[swap ?? index]) < 0
      ) {
        swap = rightChildIndex
      }

      if (swap === null) break
      this._swap(index, swap)
      index = swap
    }
  }

  // So sánh 2 phần tử: theo cost trước, nếu cost bằng thì theo index
  _compare(a, b) {
    if (a[0] !== b[0]) {
      return a[0] - b[0] // So sánh cost trước
    }
    return a[1] - b[1] // Nếu cost bằng nhau, so sánh theo index
  }

  // Hoán đổi 2 phần tử trong heap
  _swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

var totalCost = function (costs, k, candidates) {
  let total = 0
  let left = 0
  let right = costs.length - 1
  const leftHeap = new MinHeap()
  const rightHeap = new MinHeap()

  while (leftHeap.size() < candidates && left <= right) {
    leftHeap.push([costs[left], left]) //lưu các cặp val index và chỉ lưu candidates worker
    left++
  }

  while (rightHeap.size() < candidates && left <= right) {
    //candidates worker bên phải
    rightHeap.push([costs[right], right])
    right--
  }

  for (let i = 0; i < k; i++) {
    let hire
    if (leftHeap.size() && rightHeap.size()) {
      if (leftHeap.heap[0][0] <= rightHeap.heap[0][0]) {
        //so sánh index vì bản chất minHeap tại 0 đã là min
        hire = leftHeap.pop()
        if (left <= right) leftHeap.push([costs[left], left++]) //lưu thà left tiếp theo từ mảng gốc mục đích cân bằng số lượng 2 min
      } else {
        hire = rightHeap.pop()
        if (left <= right) rightHeap.push([costs[right], right--]) //điều kiện left <= right vì khi nó vượt quá thì tức là left sẽ lấy phần tử mà right đã lấy r
      }
    } else if (leftHeap.size()) {
      hire = leftHeap.pop()
      if (left <= right) leftHeap.push([costs[left], left++])
    } else {
      hire = rightHeap.pop()
      if (left <= right) rightHeap.push([costs[right], right--])
    }
    total += hire[0]
  }

  return total
}

/**
 * costs[i] là giá thuê người làm việc tại i
 * k là số phiên tuyển dụng mỗi phiên cần thuê 1 người mới
 * trong mỗi phiên chỉ dược xem candidates người từ đầu hoặc cuối dãy
 * Mỗi phiên sẽ chọn ra người có giá thuê thấp nhất trong các ứng cử viên
 * Return tổng tiền thuê chính xác k người làm việc
 *
 * Thử cách làm bình thường trước
 * O(k*(2*n*candidates)) vì splice tốn O(n) (fail)
 *
 * cách khác sử dụng min heap 2 đâu left right
 * nhưng phải viết 1 cái heap chuẩn với o(log(n))
 */
